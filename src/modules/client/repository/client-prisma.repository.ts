import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { ClientResponseDto } from '../dto/client-response.dto';
import { ClientCreateDto } from '../dto/client-create.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(client: ClientCreateDto): Promise<ClientResponseDto | null> {
    const newClient = await this.prisma.client.create({
      data: {
        ...client,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return this.toClientResponseDto(newClient);
  }

  async findAll(): Promise<ClientResponseDto[]> {
    const clients = await this.prisma.client.findMany();
    return clients.map(this.toClientResponseDto);
  }

  async findById(id: string): Promise<ClientResponseDto | null> {
    const client = await this.prisma.client.findUnique({
      where: { id },
    });

    if (!client) {
      throw new Error('Client not found');
    }

    return this.toClientResponseDto(client);
  }

  async update(id: string, client: ClientCreateDto): Promise<ClientResponseDto | null> {
    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: {
        ...client,
        updatedAt: new Date(),
      },
    });

    return this.toClientResponseDto(updatedClient);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.client.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  private toClientResponseDto(client: any): ClientResponseDto {
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
