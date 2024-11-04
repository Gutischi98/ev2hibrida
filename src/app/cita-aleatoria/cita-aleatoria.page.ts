import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner } from '@ionic/angular/standalone';
import { Cita } from '../interface/cita';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.page.html',
  styleUrls: ['./cita-aleatoria.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CitaAleatoriaPage {
  citaAleatoria!: Cita;

  constructor(private citaService: CitaService) {
    this.generarCitaAleatoria();
  }

  generarCitaAleatoria() {
    const citas = this.citaService.obtenerTodasLasCitas();
    this.citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
  }
}