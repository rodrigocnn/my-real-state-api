import { IsNotEmpty, IsString } from 'class-validator';

export class CityCreateDto {
  @IsString({
    message: 'o campo name deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O campo name não deve ser vazio',
  })
  name: string;
}
