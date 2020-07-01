import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule, getModelToken, InjectModel } from '@nestjs/mongoose';
import { Mongoose, Model } from 'mongoose';
import { Person } from 'classes/person';
import { PersonSchema } from 'schemas/person.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]), PersonModule],
    controllers: [PersonController],
    providers: [PersonService],
})

export class PersonModule { }