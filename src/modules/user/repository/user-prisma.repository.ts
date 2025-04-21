import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponseDto } from '../dto/user-response.dto';
import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../model/user.model';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: UserCreateDto): Promise<UserResponseDto | null> {
    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newUser;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      password: user.password,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
