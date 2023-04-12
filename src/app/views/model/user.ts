export class User {
    id!: number;
    username!: string;
    password!: string;
    userLastName!: string;
    email!: string;
    phoneNumber!: string;
    authorities!: Role[];
  }
  
  export class Role {
    roleName!: string;
  }
  