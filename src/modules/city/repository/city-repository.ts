import { CityCreateDto } from '../dto/city-create.dto';
import { CityResponseDto } from '../dto/city-response.dto';

export interface CityRepository {
  create(city: CityCreateDto): Promise<CityResponseDto | null>;
  findAll(): Promise<CityResponseDto[]>;
  findById(id: string): Promise<CityResponseDto>;
  update(id: string, city: CityCreateDto): Promise<CityResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
