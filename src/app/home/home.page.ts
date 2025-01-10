import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  password: string = '';
  name: string = '';
  email: string = '';
  
  companyName: string = '';
  nit: string = '';
  address: string = '';
  phone: string = '';

  companies: any = [];
  users: any = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
    this.getCompanies();
  }

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
    event.preventDefault(); // Evitar que el formulario recargue la página

    if (!this.email || !this.password) {
        console.log('Por favor, ingresa tu email y contraseña.');
        return;
    }

    // Buscar al usuario en la lista
    const user = this.users.find(
        (u: any) => u.correo === this.email && u.contrasena === this.password
    );

    if (user) {
        console.log('Inicio de sesión exitoso.', user);
        // Aquí puedes redirigir al usuario o realizar otra acción
    } else {
        console.log('Email o contraseña incorrectos.');
    }
  };

  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  };
  postUser(event: Event) {
    event.preventDefault(); // Evitar recargar la página al enviar el formulario

    // Validar los datos antes de enviarlos
    if (!this.name || !this.email || !this.password) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    // Crear el objeto usuario
    const newUser = {
      idUser: this.users.length + 1, // Asignar un ID incremental
      nombre: this.name,
      correo: this.email,
      contrasena: this.password,
    };

    // Realizar la solicitud POST
    this.http.post('http://localhost:8000/createUsers', newUser).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.getUsers(); // Actualizar la lista de usuarios
        this.resetForm(); // Limpiar el formulario
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
    event.preventDefault(); // Evitar que el formulario recargue la página

    // Validar los datos antes de enviarlos
    if (!this.companyName || !this.nit || !this.address || !this.email || !this.phone) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    // Crear el objeto de compañía
    const newCompany = {
      idEmpresa: this.companies.length + 1, // Asignar un ID incremental
      nombre: this.companyName,
      nit: this.nit,
      direccion: this.address,
      correo: this.email,
      telefono: this.phone,
    };

    // Realizar la solicitud POST
    this.http.post('http://localhost:8000/createCorporations', newCompany).subscribe(
      (response) => {
        console.log('Compañía creada exitosamente:', response);
        this.getCompanies(); // Actualizar la lista de compañías
        this.resetCompanyForm(); // Limpiar el formulario
      },
      (error) => {
        console.error('Error al crear la compañía:', error);
      }
    )
  };
  
}
