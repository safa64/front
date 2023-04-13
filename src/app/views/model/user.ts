export class User {
    id!: number;
    username!: string;
    userLastName!: string;
    email!: string;
    phoneNumber!: number;
    roles!: Authorisation[];
    titre!:string;

      // Ajoutez cette propriété à la classe User
  }
  
  export class Authorisation {
    roleName!:string;
    id!:number;
  }
  