import { UserCreateDto } from '../dto/user-create.dto';
import { UserResponseDto } from '../dto/user-response.dto';

export interface UserRepository {
  create(user: UserCreateDto): Promise<UserResponseDto | null>;
  findAll(): Promise<UserResponseDto[]>;
  findById(id: string): Promise<UserResponseDto>;
  findByEmail(email: string): Promise<UserResponseDto>;
  update(id: string, user: UserCreateDto): Promise<UserResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
