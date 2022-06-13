import { faker } from '@faker-js/faker';


export class Company {

  companyName:string;
  catchPhrase:string;
  location :{
     lat: number;
     lng: number;
  }

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat :parseInt(faker.address.latitude()),
      lng :parseInt(faker.address.longitude()),
    }
  }
  makerContent(){

    return  `<div>
      <h1> company's name is :${this.companyName}</h1>
      </div>
     `
  }
}