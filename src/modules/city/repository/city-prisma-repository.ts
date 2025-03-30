import { Injectable } from '@nestjs/common';

import { CityRepository } from './city-repository';
import { CityResponseDto } from '../dto/city-response.dto';
import { CityCreateDto } from '../dto/city-create.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityPrismaRepository implements CityRepository {
  constructor(private readonly prisma: PrismaService) {} // Injete o PrismaService

  async create(city: CityCreateDto): Promise<CityResponseDto | null> {
    const newCity = await this.prisma.city.create({
      data: {
        ...city,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return newCity;
  }

  async findAll(): Promise<CityResponseDto[]> {
    const cities = await this.prisma.city.findMany();
    return cities;
  }

  async findById(id: string): Promise<CityResponseDto> {
    const city = await this.prisma.city.findUnique({
      where: { id },
    });

    if (!city) {
      throw new Error('City not found');
    }

    return city;
  }

  async update(id: string, city: CityCreateDto): Promise<CityResponseDto | null> {
    const updatedCity = await this.prisma.city.update({
      where: { id },
      data: {
        ...city, // Dados atualizados
        updatedAt: new Date(),
      },
    });

    return updatedCity;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.city.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
