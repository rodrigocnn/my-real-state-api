import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Torna o PrismaService disponível em outros módulos
})
export class PrismaModule {}
