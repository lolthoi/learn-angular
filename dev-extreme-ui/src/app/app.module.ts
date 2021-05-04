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

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    BrandComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
