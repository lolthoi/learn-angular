import { Component, OnInit } from '@angular/core';
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
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Products[];
  product = new Products();
  brand: Brands[];
  category: Categories[];

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: any) => {
      this.products = res;
    });
    this.brandService.getAll().subscribe((res: any) => {
      this.brand = res;
    });
    this.categoryService.getAll().subscribe((res: any) => {
      this.category = res;
    });
  }
  onDelete(e: any) {
    this.productService.delete(e.key).subscribe(() => {
      this.products;
    });
  }

  onUpdate(e: any) {
    this.product = {
      productId: e.key,
      productName: e.data.productName,
      brandId: e.data.brandId,
      categoryId: e.data.categoryId,
      modelYear: e.data.modelYear,
      listPrice: e.data.listPrice,
      orderItems: [],
      stocks: [],
    };
    this.productService.update(this.product).subscribe(() => {
      this.products;
    });
  }

  onCreate(e: any) {
    this.product = {
      productId: this.product.productId,
      productName: e.data.productName,
      brandId: e.data.brandId,
      categoryId: e.data.categoryId,
      modelYear: e.data.modelYear,
      listPrice: e.data.listPrice,
      orderItems: [],
      stocks: [],
    };
    this.productService.create(this.product).subscribe(() => {
      this.products;
    });
  }
}
