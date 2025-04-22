import { Test, TestingModule } from '@nestjs/testing';
import { NeighborhoodService } from './neighborhood.service';
import { NeighborhoodMemoryRepository } from './repository/neighborhood-memory.repository';

describe('NeighborhoodService', () => {
  let service: NeighborhoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NeighborhoodService,
        {
          provide: 'NeighborhoodRepository',
          useClass: NeighborhoodMemoryRepository,
        },
      ],
    }).compile();

    service = module.get<NeighborhoodService>(NeighborhoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty list initially', async () => {
    const result = await service.findAll();
    expect(result).toHaveLength(0);
  });

  it('should create a new neighborhood', async () => {
    const result = await service.create({ name: 'Centro', cityId: '1' });
    expect(result?.name).toBe('Centro');
  });

  it('should return a list of neighborhoods', async () => {
    await service.create({ name: 'Centro', cityId: '1' });
    await service.create({ name: 'Bairro Alto', cityId: '2' });
    const result = await service.findAll();
    expect(result).toHaveLength(2);
  });

  it('should update a neighborhood', async () => {
    const resultCreate = await service.create({ name: 'Alto', cityId: '1' });
    if (resultCreate) {
      const resultUpdate = await service.update(resultCreate.id, {
        name: 'Bairro Alto',
        cityId: resultCreate.id,
      });
      if (resultUpdate) {
        expect(resultUpdate.name).toBe('Bairro Alto');
      }
    }
  });

  it('should delete a neighborhood correctly', async () => {
    await service.create({ name: 'Centro', cityId: '1' });
    const lastAdded = await service.create({ name: 'Bairro Alto', cityId: '2' });
    if (lastAdded) {
      const resultDelete = await service.delete(lastAdded.id as string);
      const result = await service.findAll();
      expect(result).toHaveLength(1);
      expect(resultDelete).toBe(true);
    }
  });
});
