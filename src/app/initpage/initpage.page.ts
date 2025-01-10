import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-initpage',
  templateUrl: './initpage.page.html',
  styleUrls: ['./initpage.page.scss'],
  standalone: true,
    imports: [IonicModule, FormsModule, CommonModule],
})
export class InitpagePage implements OnInit {

  users: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };

}
