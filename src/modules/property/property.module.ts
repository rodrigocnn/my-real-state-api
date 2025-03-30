import { Module } from '@nestjs/common';

import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { PropertyPrismaRepository } from './repositories/property-prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyPrismaRepository],
})
export class PropertyModule {}
