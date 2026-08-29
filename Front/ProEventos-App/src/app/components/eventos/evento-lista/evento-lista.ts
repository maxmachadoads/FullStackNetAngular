import { Component, inject, signal, TemplateRef } from '@angular/core';
import { Evento } from '../../../models/Evento';
import { EventoService } from '../../../services/evento.service';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { DateTimeFormatPipe } from '../../../helpers/DateTimeFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-evento-lista',
  imports: [
    CollapseModule,
    FormsModule,
    DateTimeFormatPipe,
    TooltipModule,
    ModalModule,
    ToastrModule,
    RouterLink,
  ],
  templateUrl: './evento-lista.html',
  styleUrl: './evento-lista.scss',
})
export class EventoLista {
  modalRef?: BsModalRef;
  toastr = inject(ToastrService);
  public eventoId = 0;

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
    private router: Router,
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

  public mostrarImagem(imagemURL: string): string{
    return (imagemURL != '') ? `${environment.apiURL}resources/images/${imagemURL}` : 'assets/img/noimagem.jpeg';
  }

  public getEventos(): void {
    this.eventoService
      .getEventos()
      .subscribe({
        next: (_eventos: Evento[]) => {
          console.log('RESPOSTA DA API:', _eventos);
          this.todosEventos.set(_eventos);
          this.eventos.set(_eventos);
        },

        error: (error) => {
          console.error(error);
          this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
        },
        complete: () => {
          console.log('Requisição concluída');
        },
      })
      .add(() => this.spinner.hide());
  }

  openModal(event: any, template: TemplateRef<void>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();

    this.eventoService.deleteEvento(this.eventoId).subscribe(
      (result: any) => {
        console.log(result);
        if (result.message === 'Deletado') {
          this.toastr.success('O Evento foi deletado com sucesso!', 'Deletado!');
          this.spinner.hide();
          this.getEventos();
        }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deletar o evento ${this.eventoId}!`, 'Erro');
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      },
    );
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }
}
