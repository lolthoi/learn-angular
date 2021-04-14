import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() products;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: number): void {
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(productId: number, element: HTMLInputElement) {
    const value = element.value;
    const intValue = parseInt(value);
    if (intValue < 1) {
      element.value = -intValue + '';
    } else if (value.length > 2) {
      element.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({
      productId,
      quantity: parseInt(element.value) || '',
    });
  }
}
