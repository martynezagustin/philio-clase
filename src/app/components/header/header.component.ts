import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavsService } from '../../services/navs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  routes: Route[] = []
  constructor(private navServices: NavsService){
    this.routes = this.navServices.getRoutes()
  }
  ngOnInit(){
    console.log(this.routes);
  }
}
