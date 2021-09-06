import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from '../../productos.component';

const PRODUCTS_ROUTE: Routes = [
    { path: '', component: ProductosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(PRODUCTS_ROUTE)],
    exports: [RouterModule]
})

export class ROUTING {}