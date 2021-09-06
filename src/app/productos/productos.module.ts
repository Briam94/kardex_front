import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from './../core/core.routing';
import { LayoutModule } from './../core/layout/layout.module';
import { ProductosComponent } from './../productos/productos.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CapitalizePipe } from '../core/layout/pipes/capitalizado.pipe';
import { ProductsComponent } from './products/products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { ShoppingComponent } from './products/shopping/shopping.component';
import { ShoppingCarrComponent } from './products/shopping-carr/shopping-carr/shopping-carr.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
    imports: [
        APP_ROUTES,
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports: [
    ],
    declarations: [
        ProductosComponent,
        HomeComponent,
        CapitalizePipe,
        ProductsComponent,
        ShoppingComponent,
        ShoppingCarrComponent
    ],
    providers: [],
    entryComponents: [
    ],
})
export class ProductosModule { }
