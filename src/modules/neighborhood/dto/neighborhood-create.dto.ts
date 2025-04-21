import { IsNotEmpty, IsString } from 'class-validator';

export class NeighborhoodCreateDto {
  @IsString({
    message: 'o campo name deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O campo name não deve ser vazio',
  })
  name: string;

  @IsString({
    message: 'o campo cityId deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O campo cityId não deve ser vazio',
  })
  cityId: string;
}
