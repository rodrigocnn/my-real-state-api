import { NeighborhoodCreateDto } from '../dto/neighborhood-create.dto';
import { NeighborhoodResponseDto } from '../dto/neighborhood-response.dto';

export interface NeighborhoodRepository {
  create(neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null>;
  findAll(): Promise<NeighborhoodResponseDto[]>;
  findById(id: string): Promise<NeighborhoodResponseDto>;
  update(id: string, neighborhood: NeighborhoodCreateDto): Promise<NeighborhoodResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
