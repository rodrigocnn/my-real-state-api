import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { RentPaymentStatus } from '../models/rent-payment-status.enum';
import { Type } from 'class-transformer';

export class RentalPaymentCreateDto {
  @IsNotEmpty()
  @IsString()
  rentalContractId: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  paymentDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(RentPaymentStatus)
  status: RentPaymentStatus;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
