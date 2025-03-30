import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';

export class ClientCreateDto {
  @IsString({ message: 'Deve ser uma string' })
  @IsNotEmpty({ message: 'Nome não deve ser vazio' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail não deve ser vazio' })
  email: string;

  @IsString({ message: 'CPF deve ser uma string' })
  @IsNotEmpty({ message: 'CPF não deve ser vazio' })
  cpf: string;

  @IsPhoneNumber('BR', { message: 'Telefone inválido' })
  @IsOptional() // O telefone é opcional, se necessário
  phone: string;
}
