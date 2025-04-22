import { Inject, Injectable } from '@nestjs/common';

import { RentalPaymentResponseDto } from './dto/rental-payment-response.dto';

import { RentalPaymentCreateDto } from './dto/rental-payment-create.dto';
import { RentalPaymentRepository } from './repository/rental-payment.repository';

@Injectable()
export class RentalPaymentService {
  constructor(
    @Inject('RentalPaymentRepository')
    private readonly rentalPaymentRepository: RentalPaymentRepository,
  ) {}

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
