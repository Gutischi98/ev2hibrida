import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonList } from '@ionic/angular/standalone';
import { Cita } from '../interface/cita';
import { CitaService } from '../services/cita.service';
import { CitaFormComponent } from '../components/cita-form/cita-form.component';

@Component({
  selector: 'app-manage-citas',
  templateUrl: './gestionar-citas.page.html',
  styleUrls: ['./gestionar-citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonList, CommonModule, FormsModule, CitaFormComponent],
})
export class GestionarCitasPage {
  citas: Cita[];

  constructor(private citaService: CitaService) {
    this.citas = this.citaService.obtenerTodasLasCitas();
  }

  agregarCita(cita: Cita) {
    this.citaService.agregarCita(cita);
    this.citas = this.citaService.obtenerTodasLasCitas();
  }

  eliminarCita(cita: Cita) {
    this.citaService.eliminarCita(cita);
    this.citas = this.citaService.obtenerTodasLasCitas();
  }
}