import { Component } from '@angular/core';
import { HomePresentationComponent } from '../../home-presentation/home-presentation.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomePresentationComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
