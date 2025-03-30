export enum PropertyPurpose {
  SALE = 'venda',
  RENT = 'alugar',
}

export class Property {
  id: string;
  title: string;
  negotiationType: PropertyPurpose;
  description: string;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  price: number;
  address: string;
  latitude: number | null;
  longitude: number | null;
  neighborhood: string;
  cityId: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}
