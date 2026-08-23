import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorFields } from '../../../helpers/ValidatorFields';
import { NgClass } from '@angular/common';

@Component({
  imports: [TituloComponent, NgClass, ReactiveFormsModule],
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  get f(): any{
    return this.form.controls;
  }

  constructor(public fb: FormBuilder){}

  ngOnInit(): void {
    this.validation();
  }

   private validation(): void{
     const formOptions: AbstractControlOptions = {
      validators: ValidatorFields.MustMatch('senha','confirmeSenha')
    };
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      palestrante: ['', Validators.required],
      descricao: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmeSenha: ['', Validators.required],
      customCheck1: ['', Validators.required],
    }, formOptions);
  }

}
