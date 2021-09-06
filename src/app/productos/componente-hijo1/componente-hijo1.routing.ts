import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteHijo1Component } from './componente-hijo1.component';

const COMPONENTEHIJO1_ROUTE: Routes = [
    { path: '', component: ComponenteHijo1Component }
];

@NgModule({
    imports: [RouterModule.forChild(COMPONENTEHIJO1_ROUTE)],
    exports: [RouterModule]
})

export class ROUTING {}
