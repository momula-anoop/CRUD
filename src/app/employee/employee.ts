export class Employee {
    id!: number;
    name!: string;
    email!: string;
    designation!: Designation;
  }
  
  export enum Designation {
    HR = 'Human Resources',
    SF = 'Software',
    OP = 'Operations',
  }
  