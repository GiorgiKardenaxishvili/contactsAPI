import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contact } from '../classes/contact.class';

export const ContactSchema = SchemaFactory.createForClass(Contact);