import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ValidatorFields } from '../../../helpers/ValidatorFields';

@Component({
  selector: 'app-registration',
  imports: [RouterLink, NgClass, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration implements OnInit {
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
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmeSenha: ['', Validators.required],
      customCheck1: ['', Validators.required],
    }, formOptions);
  }

}
