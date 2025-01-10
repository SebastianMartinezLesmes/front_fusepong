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
  email: string = '';
  password: string = '';
  users: any = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {this.getUsers();}

  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };

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
  
}
