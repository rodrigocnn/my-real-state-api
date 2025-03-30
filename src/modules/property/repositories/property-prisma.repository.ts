import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Importe o PrismaService
import { PropertyCreateDto } from '../dto/property-create.dto';
import { PropertyResponseDto } from '../dto/property-response.dto';
import { PropertyRepository } from './property.repository';

@Injectable()
export class PropertyPrismaRepository implements PropertyRepository {
  constructor(private prisma: PrismaService) {}

  async create(property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    const newProperty = await this.prisma.property.create({
      data: {
        ...property,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newProperty;
  }

  async findAll(): Promise<PropertyResponseDto[]> {
    return this.prisma.property.findMany();
  }

  async findById(id: string): Promise<PropertyResponseDto | null> {
    const property = await this.prisma.property.findUnique({
      where: { id },
    });
    return property;
  }

  async update(id: string, property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    const updatedProperty = await this.prisma.property.update({
      where: { id },
      data: {
        ...property,
        updatedAt: new Date(),
      },
    });
    return updatedProperty;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.property.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
