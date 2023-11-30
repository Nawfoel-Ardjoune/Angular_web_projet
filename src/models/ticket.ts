import { Student } from "./student";

export enum Major{
  SI = 'SI',
  PSY = 'PSY',
  ECO = 'ECO',
  LI = 'LI',
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}

