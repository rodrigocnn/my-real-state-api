// src/client/repository/client.repository.ts

import { ClientCreateDto } from '../dto/client-create.dto';
import { ClientResponseDto } from '../dto/client-response.dto';

export interface ClientRepository {
  create(client: ClientCreateDto): Promise<ClientResponseDto | null>;
  findAll(): Promise<ClientResponseDto[]>;
  findById(id: string): Promise<ClientResponseDto | null>;
  update(id: string, client: ClientCreateDto): Promise<ClientResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
