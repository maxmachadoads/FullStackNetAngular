import { NgClass } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {
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

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-evento-detalhe',
  imports: [ReactiveFormsModule, NgClass, BsDatepickerModule, ToastrModule],
  templateUrl: './evento-detalhe.html',
  styleUrl: './evento-detalhe.scss',
})
export class EventoDetalhe implements OnInit {
  form!: FormGroup;
  evento = {} as Evento;
  modalRef: any;
  modalService: any;
  estadoSalvar: 'post' | 'put' = 'post';

  get f(): any {
    return this.form.controls;
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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private routeRedir: Router,
  ) {}

  public carregarEvento(): void {
    const eventoIdParam = this.router.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {
      this.estadoSalvar = 'put';

      this.spinner.show();
      this.eventoService.getEventoById(+eventoIdParam).subscribe({
        next: (evento: Evento) => {
          this.evento = { ...evento };
          this.form.patchValue(this.evento);
        },
        error: (error) => {
          console.error(error);
          this.toastr.error('Erro ao Carregar o Evento', 'Erro!');
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
          console.log('Requisição concluída');
        },
      });
    }
  }

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
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public salvarAlteracao(): void {
    this.spinner.show();
    if (this.form.valid) {
      if (this.estadoSalvar === 'post') {
        this.evento = { ...this.form.value };
      } else if (this.estadoSalvar === 'put') {
        this.evento = { id: this.evento.id, ...this.form.value };
      }
      this.eventoService[this.estadoSalvar](this.evento)
        .subscribe({
          next: () => this.toastr.success('Evento salvo com Sucesso!', 'Sucesso'),
          error: (error: any) => {
            console.error(error);
            this.toastr.error('Erro ao salvar evento', 'Erro');
          },
          complete: () => {
            this.routeRedir.navigate(['/eventos/lista']);
          },
        })
        .add(() => this.spinner.hide());
    }
  }
}
