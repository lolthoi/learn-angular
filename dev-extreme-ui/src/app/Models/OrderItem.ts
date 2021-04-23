import { Orders } from './Order';
import { Products } from './Product';

export class OrderItems {
  orderId: number;
  itemId: number;
  productId: number;
  quantity: number;
  listPrice: number;
  discount: number;
  order: Orders;
  product: Products;
}
