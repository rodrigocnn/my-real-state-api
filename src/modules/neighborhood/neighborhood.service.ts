import { Injectable } from '@nestjs/common';

import { NeighborhoodResponseDto } from './dto/neighborhood-response.dto';
import { NeighborhoodCreateDto } from './dto/neighborhood-create.dto';
import { NeighborhoodPrismaRepository } from './repository/neighborhood-prisma.repository';

@Injectable()
export class NeighborhoodService {
  constructor(private readonly neighborhoodRepository: NeighborhoodPrismaRepository) {}

  create(neighborhoodData: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null> {
    return this.neighborhoodRepository.create(neighborhoodData);
  }

  findAll(): Promise<NeighborhoodResponseDto[]> {
    return this.neighborhoodRepository.findAll();
  }

  findById(id: string): Promise<NeighborhoodResponseDto> {
    return this.neighborhoodRepository.findById(id);
  }

  update(id: string, neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null> {
    return this.neighborhoodRepository.update(id, neighborhood);
  }

  delete(id: string): Promise<boolean> {
    return this.neighborhoodRepository.delete(id);
  }
}
