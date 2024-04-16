import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-presentation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.css'
})
export class HomePresentationComponent {
  constructor(private _router: Router){}
  toClase(){
    this._router.navigate(["/clase"])
  }
}
