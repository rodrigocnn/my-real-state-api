import { Injectable } from '@nestjs/common';
import { RentalPaymentRepository } from './rental-payment.repository';
import { RentalPaymentCreateDto } from '../dto/rental-payment-create.dto';
import { RentalPaymentResponseDto } from '../dto/rental-payment-response.dto';

@Injectable()
export class RentalPaymentMemoryRepository implements RentalPaymentRepository {
  create(rentalPayment: RentalPaymentCreateDto): Promise<RentalPaymentResponseDto | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<RentalPaymentResponseDto[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<RentalPaymentResponseDto> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    rentalPayment: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
