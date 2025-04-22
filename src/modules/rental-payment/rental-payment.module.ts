import { Module } from '@nestjs/common';
import { RentalPaymentService } from './rental-payment.service';
import { RentalPaymentController } from './rental-payment.controller';
import { RentalPaymentPrismaRepository } from './repository/rental-payment-prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [RentalPaymentController],
  providers: [
    RentalPaymentService,
    PrismaService,
    {
      provide: 'RentalPaymentRepository',
      useClass: RentalPaymentPrismaRepository, // No ambiente real, usa o Prisma
    },
  ],
  exports: [RentalPaymentService],
})
export class RentalPaymentModule {}
