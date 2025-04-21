import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  Min,
  IsNotEmpty,
} from 'class-validator';

export class RentalContractCreateDto {
  @IsString({ message: 'O clientId deve ser uma string' })
  @IsNotEmpty({ message: 'O clientId não pode ser vazio' })
  clientId: string;

  @IsString({ message: 'O propertyId deve ser uma string' })
  @IsNotEmpty({ message: 'O propertyId não pode ser vazio' })
  propertyId: string;

  @IsDateString({}, { message: 'A data de início deve ser uma data válida' })
  startDate: string;

  @IsOptional()
  @IsDateString({}, { message: 'A data de término deve ser uma data válida' })
  endDate?: string;

  @IsNumber({}, { message: 'O valor do aluguel deve ser um número' })
  @Min(0, { message: 'O valor do aluguel não pode ser negativo' })
  monthlyRent: number;

  @IsOptional()
  @IsNumber({}, { message: 'O valor do depósito deve ser um número' })
  @Min(0, { message: 'O valor do depósito não pode ser negativo' })
  depositAmount?: number;

  @IsString({ message: 'O status deve ser uma string' })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  @IsEnum(['ativo', 'inativo', 'pendente'], {
    message: 'O status deve ser um dos valores: ativo, inativo, pendente',
  })
  status: string;
}
