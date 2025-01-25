import { PropertyPurpose } from '../models/property.model';

export class PropertyResponseDto {
  readonly id: string;
  readonly description: string;
  readonly rooms: number;
  readonly address: string;
  readonly reference: string;
  readonly neighborhood: string;
  readonly cityId: string;
  readonly state: string;
  readonly purpose: PropertyPurpose;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
