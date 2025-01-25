import { Injectable } from '@nestjs/common';
import { NeighborhoodCreateDto } from '../dto/neighborhood-create.dto';
import { NeighborhoodResponseDto } from '../dto/neighborhood-response.dto';
import { Neighborhood } from '../model/neighborhood.model';
import { NeighborhoodRepository } from './neighborhood.repository';

@Injectable()
export class NeighborhoodMemoryRepository implements NeighborhoodRepository {
  private neighborhoods: Neighborhood[] = [];

  create(neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);
    const newNeighborhood: Neighborhood = {
      id,
      ...neighborhood,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.neighborhoods.push(newNeighborhood);
    return Promise.resolve(newNeighborhood);
  }

  findAll(): Promise<NeighborhoodResponseDto[]> {
    return Promise.resolve(this.neighborhoods.map((neighborhood) => neighborhood));
  }

  findById(id: string): Promise<NeighborhoodResponseDto> {
    const neighborhood = this.neighborhoods.find((n) => n.id === id);
    if (!neighborhood) {
      return Promise.reject(new Error('Neighborhood not found'));
    }
    return Promise.resolve(neighborhood);
  }

  update(id: string, neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null> {
    const index = this.neighborhoods.findIndex((n) => n.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    const updatedNeighborhood = {
      ...this.neighborhoods[index],
      ...neighborhood,
      updatedAt: new Date(),
    };

    this.neighborhoods[index] = updatedNeighborhood;
    return Promise.resolve(updatedNeighborhood);
  }

  delete(id: string): Promise<boolean> {
    const index = this.neighborhoods.findIndex((n) => n.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }

    this.neighborhoods.splice(index, 1);
    return Promise.resolve(true);
  }
}
