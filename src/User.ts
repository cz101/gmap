import { faker } from '@faker-js/faker';


export class User {

  name:string;
  location :{
     lat: number;
     lng: number;
  }

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat :parseInt(faker.address.latitude()),
      lng :parseInt(faker.address.longitude()),
    }
  }
  makerContent(){

    return `user's name is : ${this.name}`
  }
}