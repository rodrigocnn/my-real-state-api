import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
  IsLatitude,
  IsLongitude,
  Min,
} from 'class-validator';
import { PropertyPurpose } from '../models/property.model';

export class PropertyCreateDto {
  @IsString({ message: 'O título deve ser uma string' })
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  readonly title: string;

  @IsEnum(PropertyPurpose, { message: 'Tipo de negociação inválido' })
  readonly negotiationType: PropertyPurpose;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  readonly description: string;

  @IsNumber({}, { message: 'O número de quartos deve ser um número' })
  @Min(0, { message: 'O número de quartos não pode ser negativo' })
  readonly bedrooms: number;

  @IsNumber({}, { message: 'O número de banheiros deve ser um número' })
  @Min(0, { message: 'O número de banheiros não pode ser negativo' })
  readonly bathrooms: number;

  @IsNumber({}, { message: 'O número de suítes deve ser um número' })
  @Min(0, { message: 'O número de suítes não pode ser negativo' })
  readonly suites: number;

  @IsNumber({}, { message: 'O preço deve ser um número' })
  @Min(0, { message: 'O preço deve ser zero ou positivo' })
  readonly price: number;

  @IsString({ message: 'O endereço deve ser uma string' })
  @IsNotEmpty({ message: 'O endereço não pode ser vazio' })
  readonly address: string;

  @IsOptional()
  @IsLatitude({ message: 'Latitude inválida' })
  readonly latitude: number | null;

  @IsOptional()
  @IsLongitude({ message: 'Longitude inválida' })
  readonly longitude: number | null;

  @IsString({ message: 'O bairro deve ser uma string' })
  @IsNotEmpty({ message: 'O bairro não pode ser vazio' })
  readonly neighborhood: string;

  @IsString({ message: 'O cityId deve ser uma string' })
  @IsNotEmpty({ message: 'O cityId não pode ser vazio' })
  readonly cityId: string;

  @IsString({ message: 'O estado deve ser uma string' })
  @IsNotEmpty({ message: 'O estado não pode ser vazio' })
  readonly state: string;

  @IsOptional()
  readonly createdAt?: Date;

  @IsOptional()
  readonly updatedAt?: Date;
}
