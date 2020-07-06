import { Module } from '@nestjs/common';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
