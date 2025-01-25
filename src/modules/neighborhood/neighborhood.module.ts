import { Module } from '@nestjs/common';
import { NeighborhoodController } from './neighborhood.controller';
import { NeighborhoodService } from './neighborhood.service';
import { NeighborhoodMemoryRepository } from './repository/neighborhood-memory.repository';

@Module({
  imports: [],
  controllers: [NeighborhoodController],
  providers: [NeighborhoodService, NeighborhoodMemoryRepository],
})
export class NeighborhoodModule {}
