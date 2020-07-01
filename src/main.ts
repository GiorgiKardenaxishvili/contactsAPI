import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { PersonModule } from './person/person.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const person = await NestFactory.create(PersonModule);
  await person.listen(5000);
}
bootstrap();
