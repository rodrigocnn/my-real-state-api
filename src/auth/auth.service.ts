import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/modules/user/model/user.model';
import { HASHER, Hasher } from './hasher';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @Inject(HASHER) private readonly hasher: Hasher,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    if (user && (await this.hasher.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(email: string, password: string): Promise<User | null> {
    const hashedPassword = await this.hasher.hash(password);
    return this.userService.create({ email, password: hashedPassword });
  }
}
