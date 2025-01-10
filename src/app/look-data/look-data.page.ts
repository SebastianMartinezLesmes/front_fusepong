import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-look-data',
  templateUrl: './look-data.page.html',
  styleUrls: ['./look-data.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class LookDataPage implements OnInit {
  activeSection: string = 'companias'; // Estado inicial

  companies: any = [];
  projects: any = [];
  tickets: any = [];
  users: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCompanies();
    this.getProjects();
    this.getTickets();
    this.getUsers();
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  getCompanies() {
    this.http.get('http://localhost:8000/corporations').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.companies = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  }

  getProjects() {
    this.http.get('http://localhost:8000/proyects').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.projects = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  }

  getTickets() { 
    this.http.get('http://localhost:8000/tickets').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.tickets = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  }

  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  }
}
