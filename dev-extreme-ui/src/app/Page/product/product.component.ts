import { Component, NgModule, OnInit } from '@angular/core';
import { Brands } from 'src/app/Models/Brand';
import { Categories } from 'src/app/Models/Category';
import { Products } from 'src/app/Models/Product';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Products[];
  brand: Brands[];
  category: Categories[];
  events: Array<string> = [];
  selectedItemKeys: any[] = [];

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: any) => {
      this.product = res;
    });
    this.brandService.getAll().subscribe((res: any) => {
      this.brand = res;
    });
    this.categoryService.getAll().subscribe((res: any) => {
      this.category = res;
    });
  }
  // onDelete(productId: number): void {
  //   this.productService.delete(productId).subscribe((res: any) => {
  //     this.product = this.product.filter(
  //       (product) => product.productId !== productId
  //     );
  //   });
  // }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
}
