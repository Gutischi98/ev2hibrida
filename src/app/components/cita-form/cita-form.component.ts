import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonItem, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss'],
  standalone: true,
  imports: [IonText, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonLabel, IonButton, IonItem, CommonModule, ReactiveFormsModule],
})
export class CitaFormComponent {
  @Output() citaAgregada = new EventEmitter<{ texto: string; autor: string }>();
  
  citaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  agregarCita() {
    if (this.citaForm.valid) {
      this.citaAgregada.emit(this.citaForm.value);
      this.citaForm.reset();
    }
  }
  get textoControl() {
    return this.citaForm.get('texto');
  }

  get autorControl() {
    return this.citaForm.get('autor');
  }
}
