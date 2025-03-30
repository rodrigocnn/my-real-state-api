import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyResponseDto } from './dto/property-response.dto';
import { PropertyCreateDto } from './dto/property-create.dto';

@Controller('imoveis')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async findAll(): Promise<PropertyResponseDto[]> {
    return this.propertyService.findAll();
  }

  @Post()
  async create(@Body() property: PropertyCreateDto): Promise<PropertyResponseDto | null> {
    return await this.propertyService.create(property);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PropertyResponseDto | null> {
    return await this.propertyService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() property: PropertyCreateDto,
  ): Promise<PropertyResponseDto | null> {
    return await this.propertyService.update(id, property);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.propertyService.delete(id);
  }
}
