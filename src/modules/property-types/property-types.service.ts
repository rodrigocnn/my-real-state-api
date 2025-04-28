import { Injectable, Inject } from '@nestjs/common';
import { PropertyTypesRepository } from './repository/property-types.repository';
import { PropertyTypeCreateDto } from './dto/property-type-create.dto';
import { PropertyTypeResponseDto } from './dto/property-type-response.dto';

@Injectable()
export class PropertyTypesService {
  constructor(
    @Inject('PropertyTypesRepository')
    private readonly propertyTypesRepository: PropertyTypesRepository,
  ) {}

  async create(
    propertyTypeCreateDto: PropertyTypeCreateDto,
  ): Promise<PropertyTypeResponseDto | null> {
    return this.propertyTypesRepository.create(propertyTypeCreateDto);
  }

  async findAll(): Promise<PropertyTypeResponseDto[]> {
    return this.propertyTypesRepository.findAll();
  }

  async findOne(id: string): Promise<PropertyTypeResponseDto | null> {
    return this.propertyTypesRepository.findById(id);
  }

  async update(
    id: string,
    propertyTypeCreateDto: PropertyTypeCreateDto,
  ): Promise<PropertyTypeResponseDto | null> {
    return this.propertyTypesRepository.update(id, propertyTypeCreateDto);
  }

  async remove(id: string): Promise<boolean> {
    return this.propertyTypesRepository.delete(id);
  }
}
