import { IsDateString, IsEnum, IsOptional, IsString, IsNumber } from 'class-validator';

export class RentalContractCreateDto {
  @IsString()
  clientId: string;

  @IsString()
  propertyId: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsNumber()
  monthlyRent: number;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @IsString()
  status: string;
}
