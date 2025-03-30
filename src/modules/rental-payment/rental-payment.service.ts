import { Injectable } from '@nestjs/common';

import { RentalPaymentResponseDto } from './dto/rental-payment-response.dto';

import { RentalPaymentPrismaRepository } from './repository/rental-payment-prisma.repository';
import { RentalPaymentCreateDto } from './dto/rental-payment-create.dto';

@Injectable()
export class RentalPaymentService {
  constructor(private readonly rentalPaymentRepository: RentalPaymentPrismaRepository) {}

  async create(
    createRentalPaymentDto: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null> {
    return this.rentalPaymentRepository.create(createRentalPaymentDto);
  }

  async findAll(): Promise<RentalPaymentResponseDto[]> {
    return this.rentalPaymentRepository.findAll();
  }

  async findOne(id: string): Promise<RentalPaymentResponseDto> {
    return this.rentalPaymentRepository.findById(id);
  }

  async update(
    id: string,
    updateRentalPaymentDto: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null> {
    return this.rentalPaymentRepository.update(id, updateRentalPaymentDto);
  }

  async remove(id: string): Promise<boolean> {
    return this.rentalPaymentRepository.delete(id);
  }
}
