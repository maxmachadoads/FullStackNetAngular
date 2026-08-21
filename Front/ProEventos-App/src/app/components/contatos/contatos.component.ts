import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../../shared/titulo/titulo.component';

@Component({
  imports: [TituloComponent],
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
