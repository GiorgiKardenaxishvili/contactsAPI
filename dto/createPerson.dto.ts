import { Contact } from "classes/contact.class";

export class CreatePersonDto {
    fullName:string;
    age:number;
    contacts:Contact;

    constructor(name:string, age:number, Contacts:Contact)
    {
        this.fullName = name;
        this.age = age;
        this.contacts = Contacts;
    }
}