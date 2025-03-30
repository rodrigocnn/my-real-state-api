import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/modules/user/model/user.model';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: RegisterDto): Promise<User | null> {
    return await this.authService.register(data.email, data.password);
  }
}
