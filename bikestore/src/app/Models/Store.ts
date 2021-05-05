import { Orders } from './Order';
import { Staffs } from './Staff';
import { Stocks } from './Stock';

export class Stores {
  storeId: number;
  storeName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  orders: Orders[];
  staffs: Staffs[];
  stocks: Stocks[];
}
