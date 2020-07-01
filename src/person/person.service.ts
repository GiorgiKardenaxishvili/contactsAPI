import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Person } from 'classes/person';
import { CreatePersonDto } from 'dto/createPerson.dto';

@Injectable()
export class PersonService {

    constructor(@InjectModel(Person.name) private PersonModel: Model<Person>, @InjectConnection('persons') private connection: Connection) {}

    
    async create(createPersonDto: CreatePersonDto): Promise<Person> {
        const createdPerson = new this.PersonModel(createPersonDto);
        return createdPerson.save();
      }

      async findAll(): Promise<Person[]> {
        return this.PersonModel.find().exec();
      }

    getHello(): string {
        return 'Hello World-2!';
    }
}