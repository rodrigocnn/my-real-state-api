import { Test, TestingModule } from '@nestjs/testing';
import { RentalPaymentService } from './rental-payment.service';
import { RentalPaymentMemoryRepository } from './repository/rental-payment-memory.repository';

describe('RentalPaymentService', () => {
  let service: RentalPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RentalPaymentService,
        {
          provide: 'RentalPaymentRepository',
          useClass: RentalPaymentMemoryRepository,
        },
      ],
    }).compile();

    service = module.get<RentalPaymentService>(RentalPaymentService);
  });
});
