import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyTypesService } from './property-types.service';
import { PropertyTypeCreateDto } from './dto/property-type-create.dto';

@Controller('property-types')
export class PropertyTypesController {
  constructor(private readonly propertyTypesService: PropertyTypesService) {}

  @Post()
  create(@Body() propertyTypeCreateDto: PropertyTypeCreateDto) {
    return this.propertyTypesService.create(propertyTypeCreateDto);
  }

  @Get()
  findAll() {
    return this.propertyTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyTypeDto: PropertyTypeCreateDto) {
    return this.propertyTypesService.update(id, updatePropertyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyTypesService.remove(id);
  }
}
