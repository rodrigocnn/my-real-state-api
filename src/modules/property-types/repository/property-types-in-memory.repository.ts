import { PropertyTypeResponseDto } from '../dto/property-type-response.dto';
import { PropertyType } from '../model/property-type.model';
import { PropertyTypeCreateDto } from '../dto/property-type-create.dto';
import { PropertyTypesRepository } from './property-types.repository';

export class PropertyTypesInMemoryRepository implements PropertyTypesRepository {
  private propertyTypes: PropertyType[] = [];

  async create(data: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);

    const newPropertyType: PropertyType = {
      id: id,
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.propertyTypes.push(newPropertyType);
    return this.toResponseDto(newPropertyType);
  }

  async findAll(): Promise<PropertyTypeResponseDto[]> {
    return this.propertyTypes.map(this.toResponseDto);
  }

  async findById(id: string): Promise<PropertyTypeResponseDto | null> {
    const propertyType = this.propertyTypes.find((p) => p.id === id);
    return propertyType ? this.toResponseDto(propertyType) : null;
  }

  async update(id: string, data: PropertyTypeCreateDto): Promise<PropertyTypeResponseDto | null> {
    const propertyTypeIndex = this.propertyTypes.findIndex((p) => p.id === id);
    if (propertyTypeIndex === -1) {
      return null;
    }

    const propertyType = this.propertyTypes[propertyTypeIndex];
    propertyType.name = data.name;
    propertyType.updatedAt = new Date();

    this.propertyTypes[propertyTypeIndex] = propertyType;
    return this.toResponseDto(propertyType);
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.propertyTypes.length;
    this.propertyTypes = this.propertyTypes.filter((p) => p.id !== id);
    return this.propertyTypes.length < initialLength;
  }

  private toResponseDto(propertyType: PropertyType): PropertyTypeResponseDto {
    return {
      id: propertyType.id,
      name: propertyType.name,
      createdAt: propertyType.createdAt as Date,
      updatedAt: propertyType.updatedAt as Date,
    };
  }
}
