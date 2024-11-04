import { Injectable } from '@angular/core';
import { Cita } from '../interface/cita';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private citas: Cita[] = [
    { texto: 'Carpe Diem', autor: 'Horacio' },
    { texto: 'El conocimiento es poder.', autor: 'Francis Bacon' },
    { texto: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', autor: 'John Lennon' },
  ];

  obtenerTodasLasCitas(): Cita[] {
    return this.citas;
  }

  agregarCita(cita: Cita) {
    this.citas.push(cita);
  }

  eliminarCita(cita: Cita) {
    this.citas = this.citas.filter(c => c !== cita);
  }
}