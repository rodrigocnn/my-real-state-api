import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NeighborhoodService } from './neighborhood.service';
import { NeighborhoodResponseDto } from './dto/neighborhood-response.dto';
import { NeighborhoodCreateDto } from './dto/neighborhood-create.dto';

@Controller('bairros')
export class NeighborhoodController {
  constructor(private readonly neighborhoodService: NeighborhoodService) {}

  @Get()
  async findAll(): Promise<NeighborhoodResponseDto[]> {
    return this.neighborhoodService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NeighborhoodResponseDto> {
    return this.neighborhoodService.findById(id);
  }

  @Post()
  async create(
    @Body() neighborhood: NeighborhoodCreateDto,
  ): Promise<NeighborhoodResponseDto | null> {
    return await this.neighborhoodService.create(neighborhood);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() neighborhood: NeighborhoodCreateDto,
  ): Promise<NeighborhoodResponseDto | null> {
    return this.neighborhoodService.update(id, neighborhood);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.neighborhoodService.delete(id);
  }
}
