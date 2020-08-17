import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller()
export class PersonController {
    constructor(private readonly personService: PersonService) { }

    @Get()
    async getHello() {
        this.personService.create({fullName:"giorgi", age:15});
        console.log(this.personService.findAll());
        return await this.personService.getHello();
    }
}