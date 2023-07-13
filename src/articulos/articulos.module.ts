import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [ArticulosController],
  providers: [ArticulosService, PrismaService]
})
export class ArticulosModule {}
