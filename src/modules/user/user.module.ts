import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserMemoryRepository } from './repository/user-memory.repository';

@Module({
  imports: [],

  controllers: [UserController],
  providers: [UserService, UserMemoryRepository],
  exports: [UserService, UserMemoryRepository], // Certifique-se de exportar o UserService
})
export class UserModule {}
