import { IsNotEmpty, IsString } from 'class-validator';

export class CityCreateDto {
  @IsString({
    message: 'Deve ser uma string',
  })
  @IsNotEmpty({
    message: 'Não deve ser vazio',
  })
  name: string;
}
