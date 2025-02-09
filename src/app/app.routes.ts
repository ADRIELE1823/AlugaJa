import { Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'formulario', component:FormularioComponent}
];
