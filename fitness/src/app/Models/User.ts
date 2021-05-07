import { Orders } from './Orders';

export class Users {
  id: string;
  email: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: boolean | null;
  age: number | null;
  userWeight: number | null;
  userHeight: number | null;
  orders: Orders[];
}
