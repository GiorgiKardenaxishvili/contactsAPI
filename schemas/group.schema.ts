import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contact } from '../classes/contact.class';
import { Group } from 'classes/group.class';

export const GroupSchema = SchemaFactory.createForClass(Group);