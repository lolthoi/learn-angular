import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  products: Product[] = [
    {
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      price: 5.99,
      quantity: 10,
    },
    {
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 20,
    },
    {
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      price: 1.99,
      quantity: 5,
    },
  ];
  name: string = '';
  des: string = '';
  price: number;
  quan: number;

  Pname(event) {
    this.name = event.target.value;
  }
  Pdes(event) {
    this.des = event.target.value;
  }
  Pprice(event) {
    this.price = event.target.value;
  }
  Pquan(event) {
    this.quan = event.target.value;
  }
  constructor() {}

  ngOnInit(): void {}

  isShowForm = false;
  addProduct() {
    this.products.push({
      name: this.name,
      description: this.des,
      price: this.price,
      quantity: this.quan,
    });
    this.name = '';
    this.des = '';
    this.price = 0;
    this.quan = 0;
    this.isShowForm = false;
  }
  filterStatus = '0';
  checkPrice() {}
}
