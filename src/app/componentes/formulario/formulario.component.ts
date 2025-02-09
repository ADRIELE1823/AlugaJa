import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MainComponent,ReactiveFormsModule,  CommonModule], // Adicione ReactiveFormsModule aqui
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário enviado:', this.formulario.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}