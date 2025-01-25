import { Injectable } from '@nestjs/common';
import { CityRepository } from './city-repository';
import { CityResponseDto } from '../dto/city-response.dto';
import { CityCreateDto } from '../dto/city-create.dto';
import { City } from '../model/city.model';

@Injectable()
export class CityMemoryRepository implements CityRepository {
  private cities: City[] = [];

  create(city: CityCreateDto): Promise<CityResponseDto | null> {
    const id = (Math.random() * 1e18).toString(36);
    const newCity: City = {
      id,
      ...city,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.cities.push(newCity);
    return Promise.resolve(newCity);
  }

  findAll(): Promise<CityResponseDto[]> {
    return Promise.resolve(this.cities.map((city) => city));
  }

  findById(id: string): Promise<CityResponseDto> {
    const city = this.cities.find((c) => c.id === id);
    if (!city) {
      return Promise.reject(new Error('City not found'));
    }
    return Promise.resolve(city);
  }

  update(id: string, city: CityCreateDto): Promise<CityResponseDto | null> {
    const index = this.cities.findIndex((c) => c.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    const updatedCity = {
      ...this.cities[index],
      ...city,
      updatedAt: new Date(),
    };

    this.cities[index] = updatedCity;
    return Promise.resolve(updatedCity);
  }

  delete(id: string): Promise<boolean> {
    const index = this.cities.findIndex((c) => c.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }

    this.cities.splice(index, 1);
    return Promise.resolve(true);
  }
}
