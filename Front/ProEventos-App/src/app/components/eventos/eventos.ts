import { Component, inject, OnInit, signal, TemplateRef } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';

import { TituloComponent } from '../../shared/titulo/titulo.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-eventos',
  imports: [CollapseModule, FormsModule, TooltipModule, TituloComponent, RouterOutlet],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class Eventos implements OnInit {
  ngOnInit(): void {}
}
