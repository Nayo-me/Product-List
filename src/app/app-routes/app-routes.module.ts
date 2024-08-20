import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../componentfolder/products/products.component';
import { ViewProductDetailsComponent } from '../componentfolder/view-product-details/view-product-details.component';

const routes: Routes = [
  {path:"", component:ProductsComponent},
  {path:"view-products/:id", component:ViewProductDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutesModule { }


