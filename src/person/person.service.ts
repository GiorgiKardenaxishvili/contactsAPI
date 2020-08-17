import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group } from './classes/group.class';
import { CreatePersonDto } from './dto/createPerson.dto';
import { promises } from 'dns';
import { Person } from './classes/person.class';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel('Group') private readonly GroupModel: Model<Group>,
    @InjectModel('Person') private readonly PersonModel: Model<Person>,
  ) { }

  async getHello() {
    await this.GroupModel.find({ name: 'test' });
    return 'Hello World-2!';
  }

  async create(createDto: CreatePersonDto): Promise<Person> {
    const createdPerson = new this.PersonModel(createDto);
    return createdPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.PersonModel.find().exec();
  }
}
