import { Injectable } from '@nestjs/common';
import { PropertyMemoryRepository } from './repositories/property-memory.repository';
import { PropertyResponseDto } from './dto/property-response.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyMemoryRepository) {}

  findAll(): Promise<PropertyResponseDto[]> {
    return this.propertyRepository.findAll();
  }
}
