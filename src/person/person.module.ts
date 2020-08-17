import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema, PersonSchema } from './schemas/schemas';


@Module({
  imports: [
    /**
     * mongodb://192.168.4.169:27017/testg ამის მაგივრად შენი ლოკალური მონგოს მისამართი მიუთითე..
     * ან MSDA ში რომ მოხვალ შეძლებ ამ მისამართთან კავშირს.
     */
    MongooseModule.forRoot('mongodb://192.168.4.169:27017/testg'),
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
