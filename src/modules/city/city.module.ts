import { Module } from '@nestjs/common';

import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityMemoryRepository } from './repository/city-memory-repository';

@Module({
  imports: [],
  controllers: [CityController],
  providers: [CityService, CityMemoryRepository],
})
export class CityModule {}
