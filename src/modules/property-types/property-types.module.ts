import { Module } from '@nestjs/common';
import { PropertyTypesController } from './property-types.controller';
import { PropertyTypesService } from './property-types.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyTypesRepository } from './repository/property-types.repository';
import { PropertyTypesPrismaRepository } from './repository/property-types-prisma.repository';

@Module({
  imports: [], // Não é necessário importar PrismaModule aqui se já está sendo injetado em outro módulo
  controllers: [PropertyTypesController],
  providers: [
    PropertyTypesService,
    PrismaService, // PrismaService é necessário para interagir com o banco de dados
    {
      provide: 'PropertyTypesRepository',
      useClass: PropertyTypesPrismaRepository,
    },
  ],
  exports: [PropertyTypesService],
})
export class PropertyTypesModule {}
