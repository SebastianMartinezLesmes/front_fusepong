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

  constructor(private http: HttpClient) {}

  login(event: Event) {
    event.preventDefault(); // Evitar que el formulario se recargue la página

    if (!this.email || !this.password) {
      console.log('Por favor, ingresa tu email y contraseña.');
      return;
    }

    // Simulación de validación (puedes conectar esto con tu backend)
    if (this.email === 'user@example.com' && this.password === 'password123') {
      console.log('Inicio de sesión exitoso.');
      // Navega a otra página o muestra un mensaje de éxito
    } else {
      console.log('Email o contraseña incorrectos.');
    }
  };
  
}
