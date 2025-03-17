import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
    path: 'lista-contatos',
    component: ListaContatosComponent
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }
];
