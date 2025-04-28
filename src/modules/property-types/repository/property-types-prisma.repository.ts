import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // PrismaService
import { PropertyTypeCreateDto } from '../dto/property-type-create.dto';
import { PropertyTypeResponseDto } from '../dto/property-type-response.dto';
import { PropertyTypesRepository } from './property-types.repository';

@Injectable()
export class PropertyTypesPrismaRepository implements PropertyTypesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null> {
    const newPropertyType = await this.prisma.propertyType.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newPropertyType;
  }

  async findAll(): Promise<PropertyTypeResponseDto[]> {
    return this.prisma.propertyType.findMany();
  }

  async findById(id: string): Promise<PropertyTypeResponseDto | null> {
    const propertyType = await this.prisma.propertyType.findUnique({
      where: { id },
    });
    return propertyType;
  }

  async update(id: string, data: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null> {
    const updatedPropertyType = await this.prisma.propertyType.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
    return updatedPropertyType;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.propertyType.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
