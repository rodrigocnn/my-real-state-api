import { Injectable } from '@nestjs/common';
import { PropertyCreateDto } from '../dto/property-create.dto';
import { PropertyResponseDto } from '../dto/property-response.dto';
import { Property } from '../models/property.model';
import { PropertyRepository } from './property.repository';

@Injectable()
export class PropertyMemoryRepository implements PropertyRepository {
  private properties: Property[] = [];

  create(property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);
    const newProperty: Property = {
      id,
      ...property,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.properties.push(newProperty);
    return Promise.resolve(newProperty);
  }
  findAll(): Promise<PropertyResponseDto[]> {
    return Promise.resolve(this.properties.map((property) => property));
  }

  findById(id: string): Promise<PropertyResponseDto> {
    const property = this.properties.find((p) => p.id === id);
    if (!property) {
      return Promise.reject(new Error('Property not found'));
    }
    return Promise.resolve(property);
  }
  update(id: string, property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    const index = this.properties.findIndex((p) => p.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    const updatedProperty = {
      ...this.properties[index],
      ...property,
      updatedAt: new Date(),
    };

    this.properties[index] = updatedProperty;
    return Promise.resolve(updatedProperty);
  }

  delete(id: string): Promise<boolean> {
    const index = this.properties.findIndex((p) => p.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }

    this.properties.splice(index, 1);
    return Promise.resolve(true);
  }
}
