import { Inject, Injectable } from '@nestjs/common';

import { CityResponseDto } from './dto/city-response.dto';
import { CityCreateDto } from './dto/city-create.dto';
import { CityRepository } from './repository/city-repository';

@Injectable()
export class CityService {
  constructor(@Inject('CityRepository') private readonly cityRepository: CityRepository) {}

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
