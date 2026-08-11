import { Module } from '@nestjs/common';
import { ObjetosModule } from './objetos/objetos.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ObjetosModule, DatabaseModule],
  controllers: [],
  providers: []
})
export class AppModule {}
