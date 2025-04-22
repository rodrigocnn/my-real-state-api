import { Injectable } from '@nestjs/common';
import { RentalContractRepository } from './rental-contract.repository';
import { RentalContractResponseDto } from '../dto/rental-contract-response.dto';
import { RentalContractCreateDto } from '../dto/rental-contract-create.dto';
import { RentalContract } from '../model/rental-contract.model';

@Injectable()
export class RentalContractMemoryRepository implements RentalContractRepository {
  private rentalContracts: RentalContract[] = [];

  create(rentalContract: RentalContractCreateDto): Promise<RentalContractResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);

    const newRentalContract: RentalContract = {
      id,
      ...rentalContract,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.rentalContracts.push(newRentalContract);
    return Promise.resolve(this.mapToResponseDto(newRentalContract));
  }

  findAll(): Promise<RentalContractResponseDto[] | null> {
    const mappedContracts = this.rentalContracts.map((rentalContract) =>
      this.mapToResponseDto(rentalContract),
    );
    return Promise.resolve(mappedContracts);
  }

  findById(id: string): Promise<RentalContractResponseDto> {
    const rentalContract = this.rentalContracts.find((r) => r.id === id);
    if (!rentalContract) {
      return Promise.reject(new Error('Rental contract not found'));
    }
    return Promise.resolve(this.mapToResponseDto(rentalContract));
  }

  update(
    id: string,
    rentalContract: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    const index = this.rentalContracts.findIndex((r) => r.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    const updatedRentalContract = {
      ...this.rentalContracts[index],
      ...rentalContract,
      updatedAt: new Date(),
    };

    this.rentalContracts[index] = updatedRentalContract;
    return Promise.resolve(this.mapToResponseDto(updatedRentalContract));
  }

  delete(id: string): Promise<boolean> {
    const index = this.rentalContracts.findIndex((r) => r.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }

    this.rentalContracts.splice(index, 1);
    return Promise.resolve(true);
  }

  private mapToResponseDto(contract: RentalContract): RentalContractResponseDto {
    return {
      id: contract.id,
      startDate: new Date(contract.startDate),
      endDate: new Date(contract.endDate),
      createdAt: new Date(contract.createdAt),
      updatedAt: new Date(contract.updatedAt),
      propertyId: contract.propertyId,
      clientId: contract.clientId,
      status: contract.status,
      depositAmount: contract.depositAmount,
      monthlyRent: contract.monthlyRent,
    };
  }
}
