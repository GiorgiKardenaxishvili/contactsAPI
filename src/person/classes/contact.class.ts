import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IBase, Update, Delete } from "base";


@Schema()
export class Contact extends Document implements IBase
{
    @Prop()
    creationDate: Date = new Date();

    @Prop()
    lastUpdate: Update = new Update();

    @Prop()
    deleted: Delete = new Delete();

    @Prop()
    isHidden: boolean = false;

    @Prop([Number])
    phoneNumber: number[] = [];

    @Prop()
    socNets: string[] = [];

    @Prop()
    placeOfResidence: string[] = [];
}