import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Person } from 'classes/person';
import { PersonSchema } from 'schemas/person.schema';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [
    PersonModule,

    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }], 'persons'),

    MongooseModule.forFeatureAsync([
      {
        name: Person.name,
        useFactory: () => {
          const schema = PersonSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),

    MongooseModule.forRoot('mongodb+srv://kXar_ad96:kXar_ad96@cluster0-wnhpn.mongodb.net/nestjs-demo?retryWrites=true&w=majority', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),

    MongooseModule.forFeatureAsync([
      {
        name: Person.name,
        useFactory: () => {
          const schema = PersonSchema;
          schema.pre('save', () => console.log('Hello from pre save'));
          return schema;
        },
      },
    ]),

    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'persons',
    }),

  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }
