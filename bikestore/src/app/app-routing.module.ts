import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Page/brand/brand.component';
import { CategoryComponent } from './Page/category/category.component';
import { ProductComponent } from './Page/product/product.component';
import { StaffComponent } from './Page/staff/staff.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
