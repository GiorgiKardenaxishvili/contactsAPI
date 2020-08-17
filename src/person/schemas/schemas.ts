import { SchemaFactory } from '@nestjs/mongoose';
import { Group } from '../classes/group.class';
import { Person } from '../classes/person.class';

export const GroupSchema = SchemaFactory.createForClass(Group);
export const PersonSchema = SchemaFactory.createForClass(Person);