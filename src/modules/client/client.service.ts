import { Injectable } from '@nestjs/common';

import { ClientCreateDto } from './dto/client-create.dto';
import { ClientResponseDto } from './dto/client-response.dto';
import { ClientPrismaRepository } from './repository/client-prisma.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientPrismaRepository) {}

  async findAll(): Promise<ClientResponseDto[]> {
    return this.clientRepository.findAll();
  }

  async findById(id: string): Promise<ClientResponseDto | null> {
    return this.clientRepository.findById(id);
  }

  async create(client: ClientCreateDto): Promise<ClientResponseDto | null> {
    return this.clientRepository.create(client);
  }

  async update(id: string, client: ClientCreateDto): Promise<ClientResponseDto | null> {
    return this.clientRepository.update(id, client);
  }

  async delete(id: string): Promise<boolean> {
    return this.clientRepository.delete(id);
  }
}
