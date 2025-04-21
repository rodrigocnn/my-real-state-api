import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
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

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.userService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UserCreateDto,
  ): Promise<UserResponseDto | null> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ success: boolean }> {
    const success = await this.userService.delete(id);
    return { success };
  }
}
