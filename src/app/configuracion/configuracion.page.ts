import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ConfiguracionService } from '../services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {

  permitirEliminar: boolean = false;
  private configuracionService = inject(ConfiguracionService);

  ngOnInit() {
    this.permitirEliminar = this.configuracionService.obtenerPermitirEliminar();
  }

  guardarConfiguracion() {
    this.configuracionService.establecerPermitirEliminar(this.permitirEliminar);
  }
}
