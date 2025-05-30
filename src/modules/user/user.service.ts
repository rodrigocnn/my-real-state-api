import { Inject, Injectable } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';

import { UserCreateDto } from './dto/user-create.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

  create(user: UserCreateDto): Promise<UserResponseDto | null> {
    return this.userRepository.create(user);
  }

  findAll(): Promise<UserResponseDto[]> {
    return this.userRepository.findAll();
  }

  findById(id: string): Promise<UserResponseDto> {
    return this.userRepository.findById(id);
  }

  update(id: string, user: UserCreateDto): Promise<UserResponseDto | null> {
    return this.userRepository.update(id, user);
  }

  delete(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
