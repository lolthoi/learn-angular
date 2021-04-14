import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 10,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 20,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 1.99,
      quantity: 5,
    },
  ];
  numberItem: number;
  subTotal: number;
  removeProduct(productId: number) {
    //xóa sản phẩm
    const index = this.products.findIndex((Product) => Product.id == productId);
    if (index !== 1) {
      this.products.splice(index, 1);
    }
    //cập nhật lại số lượng sản phẩm và tổng tiền
    let numberItem = 0;
    let subTotal = 0;
    for (const product of this.products) {
      numberItem += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItem = numberItem;
    this.subTotal = subTotal;
  }
  updateQuantity(p: { Id: number; quantity: number }) {
    const product = this.products.find((Product) => Product.id == p.Id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }
}
