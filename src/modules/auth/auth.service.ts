import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserRepository } from '../user/repository/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface UserPayload {
  sub: string;
  name: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto) {
    const user = await this.userRepository.findByEmail(authDto.name);
    const userAuth = bcrypt.compare(authDto.password, user.password);

    if (!userAuth) {
      throw new UnauthorizedException('Email ou senha incorreto');
    }

    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
