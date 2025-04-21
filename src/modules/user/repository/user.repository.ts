import { UserCreateDto } from '../dto/user-create.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../model/user.model';

export interface UserRepository {
  create(user: UserCreateDto): Promise<UserResponseDto | null>;
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<UserResponseDto[]>;
  findById(id: string): Promise<UserResponseDto>;
  update(id: string, user: UserCreateDto): Promise<UserResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
