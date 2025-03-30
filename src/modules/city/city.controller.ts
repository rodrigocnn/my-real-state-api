import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResponseDto } from './dto/city-response.dto';
import { CityCreateDto } from './dto/city-create.dto';

@Controller('cidades')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(): Promise<CityResponseDto[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CityResponseDto> {
    return this.cityService.findById(id);
  }

  @Post()
  async create(@Body() city: CityCreateDto): Promise<CityResponseDto | null> {
    return await this.cityService.create(city);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() city: CityCreateDto,
  ): Promise<CityResponseDto | null> {
    return this.cityService.update(id, city);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.cityService.delete(id);
  }
}
