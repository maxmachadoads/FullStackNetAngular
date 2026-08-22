import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from "./components/eventos/eventos";
import { PalestrantesComponent } from "./components/palestrantes/palestrantes.component";
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { TituloComponent } from './shared/titulo/titulo.component';
import { NavComponent } from "./shared/nav/nav.component";

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { EventoDetalhe } from './components/eventos/evento-detalhe/evento-detalhe';
import { EventoLista } from './components/eventos/evento-lista/evento-lista';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Eventos,
    PalestrantesComponent,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    TituloComponent,
    EventoDetalhe,
    EventoLista,
    NavComponent,
    CollapseModule,
    NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
