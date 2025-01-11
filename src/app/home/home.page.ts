import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {

  constructor(private router: Router) {}
  ngOnInit() {};

  goLogin() {
    this.router.navigate(['./initpage'], { queryParams: { page: 'login' } });
  }
  
  goCreateUser() {
    this.router.navigate(['./initpage'], { queryParams: { page: 'create-user' } });
  }
  
  goCreateCompany() {
    this.router.navigate(['./initpage'], { queryParams: { page: 'create-company' } });
  }  
  
}
