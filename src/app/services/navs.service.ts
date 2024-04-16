import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavsService {
  routes: Route [] = []
  constructor(private router: Router) {
    this.routes = this.router.config
  }
  getRoutes(){
    return this.routes
  }
}
