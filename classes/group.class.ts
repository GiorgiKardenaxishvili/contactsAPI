import { IBase, Update, Delete } from "base";
import { Person } from "./person";
import { Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Group extends Document implements IBase {

    @Prop({ required: true })
    name: string;

    @Prop()
    people: Person[] = [];

    @Prop()
    creationDate: Date = new Date();

    @Prop()
    lastUpdate: Update = new Update();

    @Prop()
    deleted: Delete = new Delete();

    @Prop()
    isHidden: boolean = false;
}