import { Brands } from './Brand';
import { Categories } from './Category';
import { OrderItems } from './OrderItem';
import { Stocks } from './Stock';

export class Products {
  productId: number;
  productName: string;
  brandId: number;
  categoryId: number;
  modelYear: number;
  listPrice: number;
  orderItems: OrderItems[];
  stocks: Stocks[];
}
