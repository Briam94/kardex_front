/* RUTAS PARA LAS VISTAS DENTRO DE PRODUCTOS.

Los componentes de las rutas hijas serán cargados por Lazy Load
para evitar la carga innecesaria de archivos al inicio de la aplicación.

*/
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const PRODUCTOS_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'products',
        loadChildren: () => import('./products/products/products.module').then(m => m.ProductsModule)
    },
    { path: '**', pathMatch: 'full', redirectTo: '/productos' }
];
