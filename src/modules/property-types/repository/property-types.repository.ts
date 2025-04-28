import { PropertyTypeCreateDto } from '../dto/property-type-create.dto';
import { PropertyTypeResponseDto } from '../dto/property-type-response.dto';

export interface PropertyTypesRepository {
  create(propertyType: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null>;
  findAll(): Promise<PropertyTypeResponseDto[]>;
  findById(id: string): Promise<PropertyTypeResponseDto | null>;
  update(id: string, propertyType: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
