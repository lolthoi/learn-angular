import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './Page/staff/staff.component';
import { BrandComponent } from './Page/brand/brand.component';

@NgModule({
  declarations: [AppComponent, StaffComponent, BrandComponent],
  imports: [BrowserModule, AppRoutingModule, DxButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
