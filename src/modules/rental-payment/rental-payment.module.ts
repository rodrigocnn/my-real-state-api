import { Module } from '@nestjs/common';
import { RentalPaymentService } from './rental-payment.service';
import { RentalPaymentController } from './rental-payment.controller';
import { RentalPaymentPrismaRepository } from './repository/rental-payment-prisma.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RentalPaymentController],
  providers: [RentalPaymentService, RentalPaymentPrismaRepository],
})
export class RentalPaymentModule {}
