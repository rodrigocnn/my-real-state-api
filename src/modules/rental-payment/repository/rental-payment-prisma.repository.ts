import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RentalPaymentRepository } from './rental-payment.repository';

import { RentalPaymentResponseDto } from '../dto/rental-payment-response.dto';
import { RentalPaymentCreateDto } from '../dto/rental-payment-create.dto';

@Injectable()
export class RentalPaymentPrismaRepository implements RentalPaymentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createRentalPaymentDto: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null> {
    const newRentalPayment = await this.prisma.rentPayment.create({
      data: {
        ...createRentalPaymentDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return newRentalPayment;
  }

  async findAll(): Promise<RentalPaymentResponseDto[]> {
    const rentalPayments = await this.prisma.rentPayment.findMany();
    return rentalPayments;
  }

  async findById(id: string): Promise<RentalPaymentResponseDto> {
    const rentalPayment = await this.prisma.rentPayment.findUnique({
      where: { id },
    });

    if (!rentalPayment) {
      throw new Error('Rental payment not found');
    }

    return rentalPayment;
  }

  async update(
    id: string,
    updateRentalPaymentDto: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null> {
    const updatedRentalPayment = await this.prisma.rentPayment.update({
      where: { id },
      data: {
        ...updateRentalPaymentDto, // Dados atualizados
        updatedAt: new Date(),
      },
    });

    return updatedRentalPayment;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.rentPayment.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
