import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './Page/staff/staff.component';
import { BrandComponent } from './Page/brand/brand.component';
import { ProductComponent } from './Page/product/product.component';
import { CategoryComponent } from './Page/category/category.component';
import { ProductService } from './Services/product.service';
import { StoreComponent } from './Page/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    BrandComponent,
    ProductComponent,
    CategoryComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
