import { OrderItems } from './OrderItems';

export class Orders {
  id: string;
  orderDate: string | null;
  orderStatus: number;
  uid: string;
  orderItems: OrderItems[];
}
