import { PropertyCreateDto } from '../dto/property-create.dto';
import { PropertyResponseDto } from '../dto/property-response.dto';

export interface PropertyRepository {
  create(property: PropertyCreateDto): Promise<PropertyResponseDto | null>;
  findAll(): Promise<PropertyResponseDto[]>;
  findById(id: string): Promise<PropertyResponseDto | null>;
  update(id: string, property: PropertyCreateDto): Promise<PropertyResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
