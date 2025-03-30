import { IsDateString, IsString, IsNumber, IsOptional } from 'class-validator';

export class RentalContractResponseDto {
  @IsString()
  id: string;

  @IsString()
  clientId: string;

  @IsString()
  propertyId: string;

  @IsDateString()
  startDate: Date | null;

  @IsOptional()
  @IsDateString()
  endDate?: Date | null;

  @IsNumber()
  monthlyRent: number;

  @IsOptional()
  @IsNumber()
  depositAmount?: number | null;

  @IsString()
  status: string;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
