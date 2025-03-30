import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString({
    message: 'Deve ser uma string',
  })
  @IsNotEmpty({
    message: 'Não deve ser vazio',
  })
  email: string;
  password: string;
}
