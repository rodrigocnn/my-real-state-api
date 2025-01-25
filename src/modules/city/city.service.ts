import { Injectable } from '@nestjs/common';

import { CityMemoryRepository } from './repository/city-memory-repository';
import { CityResponseDto } from './dto/city-response.dto';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityMemoryRepository) {}

  findAll(): Promise<CityResponseDto[]> {
    return this.cityRepository.findAll();
  }
}
