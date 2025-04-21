import { Module } from '@nestjs/common';

import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityPrismaRepository } from './repository/city-prisma-repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CityController],
  providers: [
    CityService,
    PrismaService,
    {
      provide: 'CityRepository',
      useClass: CityPrismaRepository, // No ambiente real, usa o Prisma
    },
  ],
  exports: [CityService],
})
export class CityModule {}
