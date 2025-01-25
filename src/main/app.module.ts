import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from 'src/modules/property/property.module';
import { CityModule } from 'src/modules/city/city.module';

@Module({
  imports: [PropertyModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
