import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptHasher } from './bcrypt.hasher';
import { HASHER, Hasher } from './hasher';
import { UserService } from 'src/modules/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { UserMemoryRepository } from 'src/modules/user/repository/user-memory.repository';

@Global()
@Module({
  imports: [JwtModule.register({ secret: 'seu-segredo', signOptions: { expiresIn: '60m' } })],
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: HASHER, useClass: BcryptHasher },
    UserService,
    UserMemoryRepository,
  ],
  exports: [AuthService, HASHER],
})
export class AuthModule {}
