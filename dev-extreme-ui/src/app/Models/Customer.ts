import { Orders } from './Order';

export class Customers {
  customerId: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  orders: Orders[];
}
