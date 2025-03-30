import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NeighborhoodCreateDto } from '../dto/neighborhood-create.dto';
import { NeighborhoodResponseDto } from '../dto/neighborhood-response.dto';
import { NeighborhoodRepository } from './neighborhood.repository';

@Injectable()
export class NeighborhoodPrismaRepository implements NeighborhoodRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null> {
    try {
      const createdNeighborhood = await this.prisma.neighborhood.create({
        data: {
          cityId: neighborhood.cityId,
          name: neighborhood.name,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      return createdNeighborhood;
    } catch (error) {
      throw new Error('Error creating neighborhood');
    }
  }

  async findAll(): Promise<NeighborhoodResponseDto[]> {
    try {
      const neighborhoods = await this.prisma.neighborhood.findMany();
      return neighborhoods;
    } catch (error) {
      throw new Error('Error fetching neighborhoods');
    }
  }

  async findById(id: string): Promise<NeighborhoodResponseDto> {
    try {
      const neighborhood = await this.prisma.neighborhood.findUnique({
        where: { id },
      });

      if (!neighborhood) {
        throw new Error('Neighborhood not found');
      }

      return neighborhood;
    } catch (error) {
      throw new Error('Error fetching neighborhood by ID');
    }
  }

  async update(
    id: string,
    neighborhood: NeighborhoodCreateDto,
  ): Promise<NeighborhoodResponseDto | null> {
    try {
      const updatedNeighborhood = await this.prisma.neighborhood.update({
        where: { id },
        data: {
          name: neighborhood.name,
          updatedAt: new Date(),
        },
      });

      return updatedNeighborhood;
    } catch (error) {
      throw new Error('Error updating neighborhood');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const deletedNeighborhood = await this.prisma.neighborhood.delete({
        where: { id },
      });

      return !!deletedNeighborhood;
    } catch (error) {
      throw new Error('Error deleting neighborhood');
    }
  }
}
