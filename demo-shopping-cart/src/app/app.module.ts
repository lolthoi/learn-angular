import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartItemComponent,
    PromoCodeComponent,
    CheckOutComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
