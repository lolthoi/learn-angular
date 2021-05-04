import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/Models/Brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand: Brands[];
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getAll().subscribe((res: any) => {
      this.brand = res;
    });
  }
}
