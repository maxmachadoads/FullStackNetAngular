import { NgClass } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../models/Evento';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Lote } from '../../../models/Lote';
import { LoteService } from '../../../services/lote.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-evento-detalhe',
  imports: [ReactiveFormsModule, NgClass, BsDatepickerModule, ToastrModule, TooltipModule],
  templateUrl: './evento-detalhe.html',
  styleUrl: './evento-detalhe.scss',
})
export class EventoDetalhe implements OnInit {
  form!: FormGroup;
  eventoId: number = 0;
  evento = {} as Evento;
  modalRef: any;
  estadoSalvar: 'post' | 'put' = 'post';
  loteAtual = { id: 0, nome: '', indice: 0 };
  savingEvento = false;

  get modoEditar(): boolean {
    return this.estadoSalvar === 'put';
  }

  get lotes(): FormArray {
    return this.form.get('lotes') as FormArray;
  }

  get f(): any {
    return this.form.controls;
  }

  public retornaTituloLote(nome: string): string {
    return nome == null || nome == '' ? 'Nome do lote' : nome;
  }

  get bsConfig(): any {
    return {
      isAnimated: true,
      dateInputFormat: 'DD.MM.YYYY HH:mm',
      adaptivePosition: true,
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      locale: 'pt-br',
    };
  }

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private eventoService: EventoService,
    private loteService: LoteService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private routeRedir: Router,
    private modalService: BsModalService,
    private cdr: ChangeDetectorRef,
  ) {}

  public carregarEvento(): void {
    const eventoIdParam = this.router.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {
      this.eventoId = Number(eventoIdParam);
      this.estadoSalvar = 'put';

      this.spinner.show();

      this.eventoService
        .getEventoById(this.eventoId)
        .subscribe({
          next: (evento: Evento) => {
            this.evento = { ...evento };
            this.form.patchValue(this.evento);
            this.evento.lote?.forEach((lote) => {
              this.lotes.push(this.criarLote(lote));
            });
            //this.carregarLotes();
          },
          error: (error) => {
            console.error(error);
            this.toastr.error('Erro ao Carregar o Evento', 'Erro!');
          },
          complete: () => {
            console.log('Requisição concluída');
          },
        })
        .add(() => this.spinner.hide());
    }
  }

  /* public carregarLotes(): void {
    this.loteService
      .getLotesByEventoId(this.eventoId)
      .subscribe({
        next: (lotesRetorno: Lote[]) => {
          this.lotes.clear();
          lotesRetorno.forEach((lote) => {
            this.lotes.push(this.criarLote(lote));
          });
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.toastr.error('Erro ao tentar carregar lotes', 'Erro');
          console.error(error);
        },
        complete: () => {},
      })
      .add(() => this.spinner.hide());
  }*/

  ngOnInit(): void {
    this.validation();
    this.carregarEvento();
  }

  private validation(): void {
    this.form = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imagemURL: ['', Validators.required],
      lotes: this.fb.array([]),
    });
  }

  adicionarLote(): void {
    this.lotes.push(this.criarLote({ id: 0 } as Lote));
  }

  criarLote(lote: Lote): FormGroup {
    return this.fb.group({
      id: [lote.id],
      nome: [lote.nome, Validators.required],
      quantidade: [lote.quantidade, Validators.required],
      preco: [lote.preco, Validators.required],
      dataInicio: [lote.dataInicio],
      dataFim: [lote.dataFim],
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl | null): any {
    return { 'is-invalid': campoForm?.errors && campoForm?.touched };
  }

  public salvarAlteracao(): void {
    if (this.form.valid) {
      this.spinner.show();
      this.savingEvento = true;
      if (this.estadoSalvar === 'post') {
        this.evento = { ...this.form.value };
      } else if (this.estadoSalvar === 'put') {
        this.evento = { id: this.evento.id, ...this.form.value };
      }
      this.eventoService[this.estadoSalvar](this.evento)
        .pipe(
          finalize(() => {
            this.savingEvento = false;
            this.spinner.hide();
            this.cdr.markForCheck();
          }),
        )
        .subscribe({
          next: (eventoRetorno: Evento) => {
            this.toastr.success('Evento salvo com Sucesso!', 'Sucesso');
            this.routeRedir.navigate([`/eventos/detalhe/${eventoRetorno.id}`]);
          },
          error: (error: any) => {
            console.error(error);
            this.toastr.error('Erro ao salvar evento', 'Erro');
          },
        });
    }
  }

  public salvarLotes(): void {
    this.spinner.show();
    if (this.lotes.valid) {
      this.loteService
        .SaveLote(this.eventoId, this.form.value.lotes)
        .subscribe({
          next: () => {
            this.toastr.success('Lotes salvos com sucesso!', 'Sucesso!');
            //this.lotes.reset();
            this.routeRedir.navigate([`/eventos/detalhe/${this.eventoId}`]);
          },
          error: (error) => {
            console.error(error);
            this.toastr.error('Erro ao tentar salvar Lotes.', 'Erro');
          },
          complete: () => {},
        })
        .add(() => this.spinner.hide());
    }
  }

  public removerLote(template: TemplateRef<any>, indice: number): void {
    this.loteAtual.id = this.lotes.get(indice + '.id')?.value;
    this.loteAtual.nome = this.lotes.get(indice + '.nome')?.value;
    this.loteAtual.indice = indice;

    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmDeleteLote(): void {
    this.modalRef.hide();
    this.spinner.show();

    this.loteService
      .deleteLote(this.eventoId, this.loteAtual.id)
      .subscribe({
        next: () => {
          this.toastr.success('Lote deletado com sucesso!', 'Sucesso');
          this.lotes.removeAt(this.loteAtual.indice);
        },
        error: (error) => {
          this.toastr.error('Não foi possivel deletar o Lote', 'Error');
          console.error(error);
        },
        complete: () => {},
      })
      .add(() => this.spinner.hide());
  }

  declineDeleteLote(): void {
    this.modalRef.hide();
  }
}
