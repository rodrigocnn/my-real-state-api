import { Module } from '@nestjs/common';
import { NeighborhoodController } from './neighborhood.controller';
import { NeighborhoodService } from './neighborhood.service';

import { NeighborhoodPrismaRepository } from './repository/neighborhood-prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NeighborhoodController],
  providers: [NeighborhoodService, NeighborhoodPrismaRepository],
})
export class NeighborhoodModule {}
