import { Routes } from '@angular/router';
import { Eventos } from './components/eventos/eventos';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { EventoDetalhe } from './components/eventos/evento-detalhe/evento-detalhe';
import { EventoLista } from './components/eventos/evento-lista/evento-lista';
import { User } from './components/user/user';
import { Login } from './components/user/login/login';
import { Registration } from './components/user/registration/registration';

export const routes: Routes = [
  {
    path: 'user', component: User,
    children: [
      {path: 'login', component: Login},
      {path: 'registration', component: Registration},
      {path: 'perfil', component: PerfilComponent}
    ]
  },
  {path: 'eventos', redirectTo: 'eventos/lista'},
  {
    path: 'eventos', component: Eventos,
    children: [
      { path: 'detalhe/:id', component: EventoDetalhe },
      { path: 'detalhe', component: EventoDetalhe },
      { path: 'lista', component: EventoLista }
    ]

  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}

];
