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
  store: Stores;
  inverseManager: Staffs[];
  orders: Orders[];
}
