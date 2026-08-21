import { Component, inject, OnInit, signal, TemplateRef } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { DateTimeFormatPipe } from '../../helpers/DateTimeFormat.pipe';
import { TituloComponent } from "../../shared/titulo/titulo.component";

@Component({
  selector: 'app-eventos',
  imports: [
    CollapseModule,
    FormsModule,
    DateTimeFormatPipe,
    TooltipModule,
    ModalModule,
    ToastrModule,
    TituloComponent
],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class Eventos implements OnInit {
  modalRef?: BsModalRef;
  toastr = inject(ToastrService);

  public eventos = signal<Evento[]>([]);
  private todosEventos = signal<Evento[]>([]);

  public widthImg: number = 150;
  public marginImg: number = 2;
  public mostrarImg: boolean = true;

  private _filtroLista: string = '';

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
  ) {}

  public ngOnInit(): void {
     /** spinner starts on init */
    this.spinner.show();
    this.getEventos();



  }

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

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return this.todosEventos().filter((evento: Evento) => {
      const tema = evento.tema?.toLocaleLowerCase() ?? '';
      const local = evento.local?.toLocaleLowerCase() ?? '';

      return tema.includes(filtrarPor) || local.includes(filtrarPor);
    });
  }

  public alterarImg(): void {
    this.mostrarImg = !this.mostrarImg;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (_eventos: Evento[]) => {
        console.log('RESPOSTA DA API:', _eventos);

        this.todosEventos.set(_eventos);
        this.eventos.set(_eventos);
      },

      error: (error) => {
        console.error(error);
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
        this.spinner.hide();
      },

      complete: () => {
        this.spinner.hide();
        console.log('Requisição concluída');
      },
    });
  }

  openModal(template: TemplateRef<void>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O Evento foi deletado com sucesso!', 'Deletado!');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
