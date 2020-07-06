import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group } from './classes/group.class';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel('Group') private readonly GroupModel: Model<Group>,
  ) {}

  async getHello() {
    await this.GroupModel.find({ name: 'test' });
    return 'Hello World-2!';
  }
}
