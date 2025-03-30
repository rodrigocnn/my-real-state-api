import { Injectable } from '@nestjs/common';

import { RentalContractResponseDto } from './dto/rental-contract-response.dto';
import { RentalContractCreateDto } from './dto/rental-contract-create.dto';
import { RentalContractPrismaRepository } from './repository/rental-contract-prisma.repository';

@Injectable()
export class RentalContractService {
  constructor(private readonly rentalContractRepository: RentalContractPrismaRepository) {}

  async create(
    rentalContractData: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    return this.rentalContractRepository.create(rentalContractData);
  }

  async findAll(): Promise<RentalContractResponseDto[]> {
    return this.rentalContractRepository.findAll();
  }

  async findById(id: string): Promise<RentalContractResponseDto> {
    return this.rentalContractRepository.findById(id);
  }

  async update(
    id: string,
    rentalContractData: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    return this.rentalContractRepository.update(id, rentalContractData);
  }

  async delete(id: string): Promise<boolean> {
    return this.rentalContractRepository.delete(id);
  }
}
