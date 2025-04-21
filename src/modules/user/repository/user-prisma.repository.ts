import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponseDto } from '../dto/user-response.dto';
import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../model/user.model';
import { UserUpdateDto } from '../dto/user-update.dto';

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

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  async findById(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: string, user: UserCreateDto): Promise<UserResponseDto | null> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: user.name,
        email: user.email,
        updatedAt: new Date(),
      },
    });

    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
