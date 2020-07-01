import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contact } from '../classes/contact.class';
import { Person } from 'classes/person';

export const PersonSchema = SchemaFactory.createForClass(Person);