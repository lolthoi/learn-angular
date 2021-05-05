import { Stores } from './Store';
import { Orders } from './Order';

export class Staffs {
  staffId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  active: number;
  storeId: number;
  managerId: number | null;
  manager: Staffs;
  inverseManager: Staffs[];
  orders: Orders[];
}
