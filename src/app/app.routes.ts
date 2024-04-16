import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsComponent } from './components/views/faqs/faqs.component';
import { ContactoComponent } from './components/views/contacto/contacto.component';
import { InicioComponent } from './components/views/inicio/inicio.component';
import { SugerenciasComponent } from './components/views/sugerencias/sugerencias.component';
import { FormClaseComponent } from './components/views/form-clase/form-clase.component';

export const routes: Routes = [
    {path: 'inicio', component:InicioComponent, title:"Inicio"},
    {path: 'faqs', component:FaqsComponent, title: "FAQS"},
    {path: "contacto", component:ContactoComponent, title: "Contacto"},
    {path: "sugerencias", component:SugerenciasComponent, title: "Sugerencias"},
    {path: "clase", component: FormClaseComponent, title: "Philio Clase"},
    {path: "**", component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PublicRoutes{}
