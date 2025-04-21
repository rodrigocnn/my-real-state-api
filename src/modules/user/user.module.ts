import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserMemoryRepository } from './repository/user-memory.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPrismaRepository } from './repository/user-prisma.repository';
import { ConfigModule } from '@nestjs/config';
import { HashPasswordPipe } from 'src/pipes/hash-password.pipe';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [ConfigModule],

  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    UserMemoryRepository,
    HashPasswordPipe,
  ],
  exports: ['UserRepository', UserService, UserMemoryRepository],
})
export class UserModule {}
