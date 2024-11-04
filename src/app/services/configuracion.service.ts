import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  private permitirEliminar: boolean = false;

  obtenerPermitirEliminar() {
    return this.permitirEliminar;
  }

  establecerPermitirEliminar(valor: boolean) {
    this.permitirEliminar = valor;
  }
}
