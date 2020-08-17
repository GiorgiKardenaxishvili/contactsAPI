import { Contact } from "./contact.class";
import { IBase, Update, Delete } from "base";
import { Document } from "mongoose";
import { Prop } from "@nestjs/mongoose";

export class Person extends Document implements IBase {
    @Prop()
    contacts: Contact;

    @Prop({ required: true })
    fullName: string;
    age: number;

    @Prop()
    creationDate: Date = new Date();

    @Prop()
    lastUpdate: Update = new Update();

    @Prop()
    deleted: Delete = new Delete();

    @Prop()
    isHidden: boolean = false;

    constructor(name: string, Age: number) {
        super();
        this.fullName = name;
        this.age = Age;
        this.contacts = new Contact();
    }
}