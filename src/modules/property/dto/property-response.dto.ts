import { PropertyPurpose } from '../models/property.model';

export class PropertyResponseDto {
  readonly id: string;
  readonly title: string;
  readonly negotiationType: string;
  readonly description: string;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly suites: number;
  readonly price: number;
  readonly address: string | null;
  readonly latitude: number | null;
  readonly longitude: number | null;
  readonly neighborhood: string;
  readonly cityId: string;
  readonly state: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
