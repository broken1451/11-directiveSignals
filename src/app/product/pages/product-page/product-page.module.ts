import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductPageModule { }
