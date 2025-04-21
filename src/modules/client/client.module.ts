import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

import { ClientPrismaRepository } from './repository/client-prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClientController],
  providers: [ClientService, ClientPrismaRepository],
})
export class ClientModule {}
