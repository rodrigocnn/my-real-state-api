import { Injectable } from '@nestjs/common';

import { PropertyResponseDto } from './dto/property-response.dto';
import { PropertyCreateDto } from './dto/property-create.dto';
import { PropertyPrismaRepository } from './repositories/property-prisma.repository';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyPrismaRepository) {}

  findAll(): Promise<PropertyResponseDto[]> {
    return this.propertyRepository.findAll();
  }

  create(property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    return this.propertyRepository.create(property);
  }

  findById(id: string): Promise<PropertyResponseDto | null> {
    return this.propertyRepository.findById(id);
  }

  update(id: string, property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    return this.propertyRepository.update(id, property);
  }

  delete(id: string): Promise<boolean> {
    return this.propertyRepository.delete(id);
  }
}
