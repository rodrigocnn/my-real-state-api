import { Module } from '@nestjs/common';
import { NeighborhoodController } from './neighborhood.controller';
import { NeighborhoodService } from './neighborhood.service';

import { NeighborhoodPrismaRepository } from './repository/neighborhood-prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [NeighborhoodController],
  providers: [
    NeighborhoodService,
    PrismaService,

    {
      provide: 'NeighborhoodRepository',
      useClass: NeighborhoodPrismaRepository, // No ambiente real, usa o Prisma
    },
  ],
  exports: [NeighborhoodService],
})
export class NeighborhoodModule {}
