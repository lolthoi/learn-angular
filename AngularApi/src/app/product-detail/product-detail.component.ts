import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product = new Product();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id: any) {
    this.productService.findId(id).subscribe((res: any) => {
      this.product = res;
    });
  }
}
