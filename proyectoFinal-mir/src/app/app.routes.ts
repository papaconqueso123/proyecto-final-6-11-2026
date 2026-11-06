import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
    {path:'inicio',component:Inicio},
    {path:'contactos',component:Contacto},
    {path:'nosotros',component:Nosotros}
    


];
