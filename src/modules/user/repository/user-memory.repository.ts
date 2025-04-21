import { Injectable } from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../model/user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserMemoryRepository implements UserRepository {
  private users: User[] = [];

  create(user: UserCreateDto): Promise<UserResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);
    const newUser: User = {
      id,
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  findAll(): Promise<UserResponseDto[]> {
    return Promise.resolve(this.users.map((user) => user));
  }

  findById(id: string): Promise<UserResponseDto> {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  }

  findByEmail(email: string): Promise<User> {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  }

  update(id: string, user: UserCreateDto): Promise<UserResponseDto | null> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    const updatedUser = {
      ...this.users[index],
      ...user,
      updatedAt: new Date(),
    };

    this.users[index] = updatedUser;
    return Promise.resolve(updatedUser);
  }

  delete(id: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }

    this.users.splice(index, 1);
    return Promise.resolve(true);
  }
}
