import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class Eventos implements OnInit {

  public eventos = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http
      .get<any[]>('https://localhost:7177/api/eventos/')
      .subscribe({
        next: (response) => {
          console.log('RESPOSTA DA API:', response);

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
