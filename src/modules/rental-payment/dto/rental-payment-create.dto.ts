import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, Min } from 'class-validator';
import { RentPaymentStatus } from '../models/rent-payment-status.enum';
import { Type } from 'class-transformer';

export class RentalPaymentCreateDto {
  @IsString({ message: 'O ID do contrato de aluguel deve ser uma string' })
  @IsNotEmpty({ message: 'O ID do contrato de aluguel não pode ser vazio' })
  rentalContractId: string;

  @Type(() => Date)
  @IsDate({ message: 'A data de vencimento deve ser uma data válida' })
  @IsNotEmpty({ message: 'A data de vencimento não pode ser vazia' })
  dueDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de pagamento deve ser uma data válida' })
  paymentDate?: Date;

  @IsNumber({}, { message: 'O valor deve ser um número' })
  @Min(0, { message: 'O valor não pode ser negativo' })
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  amount: number;

  @IsEnum(RentPaymentStatus, { message: 'O status deve ser um valor válido' })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: RentPaymentStatus;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de criação deve ser uma data válida' })
  createdAt?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de atualização deve ser uma data válida' })
  updatedAt?: Date;
}
