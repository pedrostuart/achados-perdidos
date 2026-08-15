import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle("Api Achados e perdidos")
  .setDescription("API para achados e perdidos")
  .setVersion("1.0")
  .build()
  const documento = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup("api_achados-perdidos", app, documento)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
