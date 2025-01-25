import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResponseDto } from './dto/city-response.dto';

@Controller('cidades')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(): Promise<CityResponseDto[]> {
    return this.cityService.findAll();
  }
}
