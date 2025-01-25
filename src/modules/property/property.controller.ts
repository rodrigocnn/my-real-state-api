import { Controller, Get } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyResponseDto } from './dto/property-response.dto';

@Controller('imoveis')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async findAll(): Promise<PropertyResponseDto[]> {
    return this.propertyService.findAll();
  }
}
