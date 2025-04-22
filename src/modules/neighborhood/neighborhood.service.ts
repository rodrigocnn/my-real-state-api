import { Inject, Injectable } from '@nestjs/common';

import { NeighborhoodResponseDto } from './dto/neighborhood-response.dto';
import { NeighborhoodCreateDto } from './dto/neighborhood-create.dto';
import { NeighborhoodRepository } from './repository/neighborhood.repository';

@Injectable()
export class NeighborhoodService {
  constructor(
    @Inject('NeighborhoodRepository')
    private readonly neighborhoodRepository: NeighborhoodRepository,
  ) {}

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
