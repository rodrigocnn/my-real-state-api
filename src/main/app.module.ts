import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from 'src/modules/property/property.module';
import { CityModule } from 'src/modules/city/city.module';
import { UserModule } from 'src/modules/user/user.module';
import { NeighborhoodModule } from 'src/modules/neighborhood/neighborhood.module';

import { ClientModule } from 'src/modules/client/client.module';
import { RentalContractModule } from 'src/modules/rental-contract/rental-contract.module';
import { RentalPaymentModule } from 'src/modules/rental-payment/rental-payment.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PropertyTypesModule } from 'src/modules/property-types/property-types.module';

@Module({
  imports: [
    PropertyModule,
    PropertyTypesModule,
    CityModule,
    UserModule,
    NeighborhoodModule,
    ClientModule,
    RentalContractModule,
    RentalPaymentModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
