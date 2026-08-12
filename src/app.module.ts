import { Module } from '@nestjs/common';
import { ObjetosModule } from './objetos/objetos.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), DatabaseModule,
    ObjetosModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
