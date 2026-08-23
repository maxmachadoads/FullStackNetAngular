import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
  imports: []
})
export class TituloComponent implements OnInit {
  @Input() titulo!: string;
  @Input() subtitulo: string = 'desde 2021';
  @Input() iconClass: string = 'fa fa-user';
  @Input() botaoListar: boolean = false;
bot: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listar(): void{
    this.router.navigate([`${this.titulo.toLocaleLowerCase()}/lista`])
  }

}
