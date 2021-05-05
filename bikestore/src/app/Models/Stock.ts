import { Products } from './Product';
import { Stores } from './Store';

export class Stocks {
  storeId: number;
  productId: number;
  quantity: number | null;
  product: Products;
  store: Stores;
}
