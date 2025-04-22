import { Module } from '@nestjs/common';

import { RentalContractController } from './rental-contract.controller';
import { RentalContractService } from './rental-contract.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RentalContractPrismaRepository } from './repository/rental-contract-prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [RentalContractController],
  providers: [
    RentalContractService,
    {
      provide: 'RentalContractRepository',
      useClass: RentalContractPrismaRepository,
    },
  ],
  exports: [RentalContractService],
})
export class RentalContractModule {}
