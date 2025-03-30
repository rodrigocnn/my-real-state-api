import { Injectable } from '@nestjs/common';

import { CityResponseDto } from './dto/city-response.dto';
import { CityCreateDto } from './dto/city-create.dto';
import { CityPrismaRepository } from './repository/city-prisma-repository';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityPrismaRepository) {}

  create(cityData: CityCreateDto): Promise<CityResponseDto | null> {
    return this.cityRepository.create(cityData);
  }

  findAll(): Promise<CityResponseDto[]> {
    return this.cityRepository.findAll();
  }

  findById(id: string): Promise<CityResponseDto> {
    return this.cityRepository.findById(id);
  }

  update(id: string, city: CityCreateDto): Promise<CityResponseDto | null> {
    return this.cityRepository.update(id, city);
  }

  delete(id: string): Promise<boolean> {
    return this.cityRepository.delete(id);
  }
}
