import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleComponent } from './people/people.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'people/:id',
    component: PeopleDetailsComponent,
  },
  {
    path: 'create',
    component: PeopleCreateComponent,
  },
  {
    path: 'people/edit/:id',
    component: PeopleEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
