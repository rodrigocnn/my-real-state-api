import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CityCreateDto {
  @ApiProperty({ description: 'Nome da cidade' })
  @IsString({
    message: 'o campo name deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O campo name não deve ser vazio',
  })
  name: string;
}
