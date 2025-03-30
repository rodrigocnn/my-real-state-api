import { PropertyPurpose } from '../models/property.model';

export class PropertyCreateDto {
  readonly title: string;
  readonly negotiationType: PropertyPurpose;
  readonly description: string;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly suites: number;
  readonly price: number;
  readonly address: string;
  readonly latitude: number | null;
  readonly longitude: number | null;
  readonly neighborhood: string;
  readonly cityId: string;
  readonly state: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
