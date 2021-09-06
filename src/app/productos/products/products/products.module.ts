import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from './products.routing';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ROUTING,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ProductsModule { }
