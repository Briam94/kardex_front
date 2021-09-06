import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo2Component } from './componente-hijo2.component';

const COMPONENTEHIJO2_ROUTE: Routes = [
    { path: '', component: ComponenteHijo2Component }
];

@NgModule({
    imports: [RouterModule.forChild(COMPONENTEHIJO2_ROUTE)],
    exports: [RouterModule]
})

export class ROUTING {}
