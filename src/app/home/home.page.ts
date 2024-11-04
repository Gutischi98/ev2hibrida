import { Component, OnInit, inject} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Cita } from '../interface/cita';
import { CitaService } from '../services/cita.service';
import { CitaFormComponent } from '../components/cita-form/cita-form.component';
import { CitaComponent } from "../components/cita/cita.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CitaComponent, CitaFormComponent, FormsModule, CommonModule],
})
export class HomePage {
  constructor(private router: Router) {}

  irACitaAleatoria() {
    this.router.navigate(['/cita-aleatoria']);
  }

  irAGestionarCitas() {
    this.router.navigate(['/manage-citas']);
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }
}