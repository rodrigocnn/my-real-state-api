import { Injectable } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';

import { UserMemoryRepository } from './repository/user-memory.repository';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserMemoryRepository) {}

  findByEmail(email: string): Promise<UserResponseDto> {
    return this.userRepository.findByEmail(email);
  }

  create(user: UserCreateDto): Promise<UserResponseDto | null> {
    return this.userRepository.create(user);
  }
}
