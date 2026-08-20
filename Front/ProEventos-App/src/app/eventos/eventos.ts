import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  imports: [DatePipe, CollapseModule, FormsModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class Eventos implements OnInit {
  public eventos = signal<any[]>([]);
  private todosEventos = signal<any[]>([]);

  widthImg: number = 150;
  marginImg: number = 2;
  mostrarImg: boolean = true;

  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;

    if (this._filtroLista) {
      this.eventos.set(this.filtrarEventos(this._filtroLista));
    } else {
      this.eventos.set(this.todosEventos());
    }
  }

  filtrarEventos(filtrarPor: string): any[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return this.todosEventos().filter(
      (evento: any) =>
        evento.tema.toLocaleLowerCase().includes(filtrarPor) ||
        evento.local.toLocaleLowerCase().includes(filtrarPor),
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImg(): void {
    this.mostrarImg = !this.mostrarImg;
  }

  public getEventos(): void {
    this.http.get<any[]>('https://localhost:7177/api/eventos/').subscribe({
      next: (response) => {
        console.log('RESPOSTA DA API:', response);

        this.todosEventos.set(response);
        this.eventos.set(response);
      },

      error: (error) => {
        console.error(error);
      },

      complete: () => {
        console.log('Requisição concluída');
      },
    });
  }
}
