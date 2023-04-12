export class User {
    id!: number;
    username!: string;
    password!: string;
    userLastName!: string;
    email!: string;
    phoneNumber!: string;
    authorities!: Authority[];
    roles!: Role[];
    titre!:string;

      // Ajoutez cette propriété à la classe User
  }
  
  export class Role {
    roleName!: string;
  }
  export interface Authority {
    authority: string;
  }
  