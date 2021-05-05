import { Customers } from './Customer';
import { Staffs } from './Staff';
import { Stores } from './Store';
import { OrderItems } from './OrderItem';

export class Orders {
  orderId: number;
  customerId: number | null;
  orderStatus: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string | null;
  storeId: number;
  staffId: number;
  customer: Customers;
  staff: Staffs;
  store: Stores;
  orderItems: OrderItems[];
}

