import { Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ChatComponent } from './componentes/chat/chat.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalogo', component: CatalogoComponent }, 
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: 'chat', component: ChatComponent }, 



];
