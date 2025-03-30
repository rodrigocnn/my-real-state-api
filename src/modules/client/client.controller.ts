import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResponseDto } from './dto/client-response.dto';
import { ClientCreateDto } from './dto/client-create.dto';

@Controller('clientes')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(): Promise<ClientResponseDto[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ClientResponseDto | null> {
    return this.clientService.findById(id);
  }

  @Post()
  async create(@Body() client: ClientCreateDto): Promise<ClientResponseDto | null> {
    return await this.clientService.create(client);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() client: ClientCreateDto,
  ): Promise<ClientResponseDto | null> {
    return this.clientService.update(id, client);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.clientService.delete(id);
  }
}
