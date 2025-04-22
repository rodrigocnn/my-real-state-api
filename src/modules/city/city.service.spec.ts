import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from './city.service';
import { CityMemoryRepository } from './repository/city-memory-repository';
import { CityCreateDto } from './dto/city-create.dto';
import { validate } from 'class-validator';

describe('CityService', () => {
  let service: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: 'CityRepository',
          useClass: CityMemoryRepository,
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should to return a list empty  ', async () => {
    const result = await service.findAll();
    expect(result).toHaveLength(0);
  });

  it('should to create a new City ', async () => {
    const result = await service.create({ name: 'Barreiras' });
    expect(result?.name).toBe('Barreiras');
  });

  it('should return a list of citie ', async () => {
    await service.create({ name: 'Barreiras' });
    await service.create({ name: 'Ibotirama' });
    const result = await service.findAll();
    expect(result).toHaveLength(2);
  });

  it('should update a citie ', async () => {
    const resultCreate = await service.create({ name: 'Bar' });
    if (resultCreate) {
      const resultUpdate = await service.update(resultCreate.id, { name: 'Barreiras' });
      if (resultUpdate) {
        expect(resultUpdate.name).toBe('Barreiras');
      }
    }
  });

  it('should delete city correctly', async () => {
    await service.create({ name: 'Barreiras' });
    const lasAdd = await service.create({ name: 'Ibotirama' });
    if (lasAdd) {
      const resultDelete = await service.delete(lasAdd?.id as string);
      const result = await service.findAll();
      expect(result).toHaveLength(1);
      expect(resultDelete).toBe(true);
    }
  });
  it('should return validation error if name is empty', async () => {
    const cityData = new CityCreateDto();
    cityData.name = '';
    const errors = await validate(cityData);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ isNotEmpty: 'O campo name não deve ser vazio' });
  });
});
