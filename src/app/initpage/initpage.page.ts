import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initpage',
  templateUrl: './initpage.page.html',
  styleUrls: ['./initpage.page.scss'],
  standalone: true,
    imports: [IonicModule, FormsModule, CommonModule],
})
export class InitpagePage implements OnInit {
  currentPage: string = 'login';

  password: string = '';
  name: string = '';
  email: string = '';
  
  companyName: string = '';
  nit: string = '';
  address: string = '';
  phone: string = '';

  companies: any = [];
  users: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.getUsers();
    this.getCompanies();
    this.getRoute();
  };

  getRoute(){
    this.route.queryParams.subscribe(params => {
      if (params['page']) {
        this.currentPage = params['page'];
      }
    });
  }
  back(){
    this.router.navigate(['./home'])
  };

  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getCompanies() {
    this.http.get('http://localhost:8000/corporations').subscribe(
      (response) => {
        this.companies = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  }

  login(event: Event) {
    event.preventDefault(); 

    if (!this.email || !this.password) {
      // console.log('Por favor, ingresa tu email y contraseña.');
      return;
    }
      const user = this.users.find(
      (u: any) => u.correo === this.email && u.contrasena === this.password
    );

    if (user) {
      // console.log('Inicio de sesión exitoso.', user);
        this.router.navigate(['./look-data'])
    } else {
      // console.log('Email o contraseña incorrectos.');
    }
  };

  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  };
  postUser(event: Event) {
    event.preventDefault(); 

    if (!this.name || !this.email || !this.password) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    const newUser = {
      idUser: this.users.length + 1, 
      nombre: this.name,
      correo: this.email,
      contrasena: this.password,
    };

    this.http.post('http://localhost:8000/createUsers', newUser).subscribe(
      (response) => {
        // console.log('Usuario creado exitosamente:', response);
        this.getUsers(); 
        this.resetForm(); 
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    )
  };

  resetCompanyForm() {
    this.email = '';
    this.companyName = '';
    this.nit = '';
    this.address = '';
    this.phone = '';
  };
  postCompany(event: Event) {
    event.preventDefault(); 

    if (!this.companyName || !this.nit || !this.address || !this.email || !this.phone) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    const newCompany = {
      idEmpresa: this.companies.length + 1, 
      nombre: this.companyName,
      nit: this.nit,
      direccion: this.address,
      correo: this.email,
      telefono: this.phone,
    };

    this.http.post('http://localhost:8000/createCorporations', newCompany).subscribe(
      (response) => {
        // console.log('Compañía creada exitosamente:', response);
        this.getCompanies(); 
        this.resetCompanyForm(); 
      },
      (error) => {
        console.error('Error al crear la compañía:', error);
      }
    )
  };
}
