import { Component, Input} from '@angular/core';
import { Cita } from 'src/app/interface/cita';
import { IonCard, IonCardContent } from '@ionic/angular/standalone'

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent]
})
export class CitaComponent {
  @Input() cita!: Cita;
}