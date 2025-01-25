export enum PropertyPurpose {
  SALE = 'sale',
  RENT = 'rent',
  LEASE = 'lease',
}

export class Property {
  id: string;
  description: string;
  rooms: number;
  address: string;
  reference: string;
  neighborhood: string;
  cityId: string; // Relacionando com o ID da cidade
  state: string;
  purpose: PropertyPurpose; // Usando o Enum para garantir que seja um valor específico
  createdAt?: Date; // Data de criação, opcional
  updatedAt?: Date; // Data de atualização, opcional
}
