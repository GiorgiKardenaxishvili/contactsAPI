import { SchemaFactory } from '@nestjs/mongoose';
import { Group } from '../classes/group.class';

export const GroupSchema = SchemaFactory.createForClass(Group);