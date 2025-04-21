import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { HashPasswordPipe } from 'src/pipes/hash-password.pipe';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() user: UserCreateDto,
    @Body('password', HashPasswordPipe) passwordHash: string,
  ): Promise<UserResponseDto | null> {
    const userHash = { ...user };
    userHash.password = passwordHash;

    return await this.userService.create(userHash);
  }
}
