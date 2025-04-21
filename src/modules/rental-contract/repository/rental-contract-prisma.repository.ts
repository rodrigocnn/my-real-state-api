import { Injectable } from '@nestjs/common';

import { RentalContractRepository } from './rental-contract.repository';
import { RentalContractResponseDto } from '../dto/rental-contract-response.dto';
import { RentalContractCreateDto } from '../dto/rental-contract-create.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RentalContractPrismaRepository implements RentalContractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(rentalContract: RentalContractCreateDto): Promise<RentalContractResponseDto | null> {
    const newRentalContract = await this.prisma.rentalContract.create({
      data: {
        ...rentalContract,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return newRentalContract;
  }

  async findAll(): Promise<RentalContractResponseDto[]> {
    const rentalContracts = await this.prisma.rentalContract.findMany({
      include: {
        client: true,
        property: true,
      },
    });

    return rentalContracts.map((contract) => ({
      ...contract,
      clientName: contract.client.name,
      propertyTitle: contract.property.title,
    }));
  }

  async findById(id: string): Promise<RentalContractResponseDto> {
    const rentalContract = await this.prisma.rentalContract.findUnique({
      where: { id },
    });

    if (!rentalContract) {
      throw new Error('Rental contract not found');
    }

    return rentalContract;
  }

  async update(
    id: string,
    rentalContract: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    const updatedRentalContract = await this.prisma.rentalContract.update({
      where: { id },
      data: {
        ...rentalContract, // Dados atualizados
        updatedAt: new Date(),
      },
    });

    return updatedRentalContract;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.rentalContract.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
