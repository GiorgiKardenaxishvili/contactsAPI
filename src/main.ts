import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const person = await NestFactory.create(AppModule);
  await person.listen(5000);
}
bootstrap();
