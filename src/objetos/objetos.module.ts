import { Module } from '@nestjs/common';
import { ObjetosService } from './objetos.service';
import { ObjetosController } from './objetos.controller';

@Module({
  providers: [ObjetosService],
  controllers: [ObjetosController]
})
export class ObjetosModule {}
