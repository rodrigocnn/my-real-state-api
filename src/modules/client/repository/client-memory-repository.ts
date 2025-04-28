import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { ClientResponseDto } from '../dto/client-response.dto';
import { ClientCreateDto } from '../dto/client-create.dto';
import { Client } from '../model/client.model';

@Injectable()
export class ClientMemoryRepository implements ClientRepository {
  private clients: Client[] = [];

  async create(client: ClientCreateDto): Promise<ClientResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);

    const newClient: Client = {
      id,
      ...client,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.clients.push(newClient);
    return this.toClientResponseDto(newClient);
  }

  async findAll(): Promise<ClientResponseDto[]> {
    return this.clients.map((client) => this.toClientResponseDto(client));
  }

  async findById(id: string): Promise<ClientResponseDto | null> {
    const client = this.clients.find((c) => c.id === id);
    if (!client) {
      return null;
    }
    return this.toClientResponseDto(client);
  }

  async update(id: string, client: ClientCreateDto): Promise<ClientResponseDto | null> {
    const index = this.clients.findIndex((c) => c.id === id);
    if (index === -1) {
      return null;
    }

    const updatedClient: Client = {
      ...this.clients[index],
      ...client,
      updatedAt: new Date(),
    };

    this.clients[index] = updatedClient;
    return this.toClientResponseDto(updatedClient);
  }

  async delete(id: string): Promise<boolean> {
    const index = this.clients.findIndex((c) => c.id === id);
    if (index === -1) {
      return false;
    }

    this.clients.splice(index, 1);
    return true;
  }

  private toClientResponseDto(client: Client): ClientResponseDto {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
