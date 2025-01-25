import { Module } from '@nestjs/common';

import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { PropertyMemoryRepository } from './repositories/property-memory.repository';

@Module({
  imports: [],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyMemoryRepository],
})
export class PropertyModule {}
