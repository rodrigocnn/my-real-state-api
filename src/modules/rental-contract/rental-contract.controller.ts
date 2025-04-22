import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { RentalContractResponseDto } from './dto/rental-contract-response.dto';
import { RentalContractCreateDto } from './dto/rental-contract-create.dto';
import { RentalContractService } from './rental-contract.service';

@Controller('contratos')
export class RentalContractController {
  constructor(private readonly rentalContractService: RentalContractService) {}

  @Get()
  async findAll(): Promise<RentalContractResponseDto[] | null> {
    return this.rentalContractService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RentalContractResponseDto> {
    return this.rentalContractService.findById(id);
  }

  @Post()
  async create(
    @Body() rentalContract: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    return await this.rentalContractService.create(rentalContract);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() rentalContract: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null> {
    return this.rentalContractService.update(id, rentalContract);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.rentalContractService.delete(id);
  }
}
