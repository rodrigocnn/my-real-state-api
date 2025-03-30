import { Module } from '@nestjs/common';

import { CityController } from './city.controller';
import { CityService } from './city.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CityPrismaRepository } from './repository/city-prisma-repository';

@Module({
  imports: [PrismaModule],
  controllers: [CityController],
  providers: [CityService, CityPrismaRepository],
})
export class CityModule {}
