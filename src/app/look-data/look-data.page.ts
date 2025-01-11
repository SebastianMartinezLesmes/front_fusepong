import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getCompanies();
    this.getProjects();
    this.getTickets();
    this.getUsers();
  }

  back(){
    this.router.navigate(['./home'])
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  getCompanies() {
    this.http.get('http://localhost:8000/corporations').subscribe(
      (response) => {
        // console.log('Respuesta del servidor:', response);
        this.companies = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getProjects() {
    this.http.get('http://localhost:8000/proyects').subscribe(
      (response) => {
        // console.log('Respuesta del servidor:', response);
        this.projects = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getTickets() { 
    this.http.get('http://localhost:8000/tickets').subscribe(
      (response) => {
        // console.log('Respuesta del servidor:', response);
        this.tickets = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        // console.log('Respuesta del servidor:', response);
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };

  selectedCompany: any = null;
  nameNewProyect: string = '';
  getComp(comp: any): void {
    // console.log('Datos de la compañía seleccionada:', comp);
    this.selectedCompany = comp;
  };
  closeWindowComp(){
    this.selectedCompany = null;
  }
  postProyect(): void {
    if (!this.nameNewProyect || !this.selectedCompany) {
      console.error('Faltan datos para agregar el proyecto');
      return;
    }
    const nuevoProyecto = {
      idProyecto: this.projects.length + 1, 
      titulo: this.nameNewProyect,
      empresaFK: this.selectedCompany.idEmpresa,  
    };

    this.http.post('http://localhost:8000/createProyects', nuevoProyecto).subscribe(
      (response) => {
        // console.log('Proyecto agregado con éxito:', response);
        this.projects.push(response); 
        this.nameNewProyect = ''; 
        this.selectedCompany = null; 
      },
      (error) => {
        console.error('Error al agregar el proyecto:', error);
      }
    )
  };

  selectedProject: any = null;
  ticketDesc: string = '';
  ticketEstado: string = 'Activo';
  ticketComentarios: string = '';
  selectedUserId: string = '';
  getProj(proj:any){
    // console.log('Datos del Proyecto seleccionada:', proj);
    this.selectedProject = proj;
  };
  closeWindowProyect(){
    this.selectedProject = null;
  };
  postTicket() {
    if (!this.ticketDesc || !this.ticketEstado || !this.selectedUserId || !this.selectedProject) {
      console.error('Faltan datos para agregar el ticket');
      return;
    }
    const nuevoTicket = {
      idTicket: this.tickets.length + 1, 
      desc: this.ticketDesc,
      comentarios: [
        {
          idComent: 0, 
          comentario: this.ticketComentarios
        }
      ],
      estado: this.ticketEstado,
      proyectoFK: this.selectedProject.idProyecto, 
      usuarioFK: this.selectedUserId,  
    };

    this.http.post('http://localhost:8000/createTickets', nuevoTicket).subscribe(
      (response) => {
        // console.log('Ticket agregado con éxito:', response);
        this.tickets.push(response); 
        this.ticketDesc = ''; 
        this.ticketEstado = ''; 
        this.ticketComentarios = ''; 
        this.selectedProject = null; 
      },
      (error) => {
        console.error('Error al agregar el ticket:', error);
      }
    )
  };

  selectedTicket: any = null;
  ticketWindow: string = '';
  ticketStatus: string  = '';
  getTicket(ticket: any, action: string) {
    // console.log('Datos del ticket seleccionada:', ticket);
    this.selectedTicket = ticket;
    this.ticketWindow = action; 
  };
  closeWindowTicket(){
    this.selectedTicket = null;
  };

  postComentTicket() {
    if (!this.ticketComentarios) {
      console.error('Faltan datos para agregar el comentario');
      return;
    }
    const comentarioData = { comentario: this.ticketComentarios };
    this.http.post(`http://localhost:8000/ticketsComents/${this.selectedTicket.idTicket}/comentarios`, comentarioData)
    .subscribe(
      (response: any) => {
        // console.log('Comentario agregado con éxito:', response);
        this.selectedTicket.comentarios.push(response.comentarios[response.comentarios.length - 1]); 
        this.ticketComentarios = ''; 
        this.ticketWindow = ''; 
      },
      (error) => {
        console.error('Error al agregar el comentario:', error);
      }
    )
  };  
  putDescTicket() {
    if (!this.ticketDesc) {
      console.error('Faltan datos para actualizar la descripción del ticket');
      return;
    }
    const descripcionData = {
      desc: this.ticketDesc
    };
    this.http.put(`http://localhost:8000/ticketsDesc/${this.selectedTicket.idTicket}`, descripcionData)
    .subscribe(
      (response: any) => {
        // console.log('Descripción del ticket actualizada con éxito:', response);
        this.selectedTicket.desc = this.ticketDesc;
        this.ticketDesc = '';  
        this.ticketWindow = '';  
      },
      (error) => {
        console.error('Error al actualizar la descripción del ticket:', error);
      }
    )
  };
  putStatusTicket() {
    if (!this.ticketStatus) {
      console.error('Faltan datos para actualizar el estado del ticket');
      return;
    }
      const estadoData = {
      estado: this.ticketStatus
    };
    this.http.put(`http://localhost:8000/ticketsState/${this.selectedTicket.idTicket}`, estadoData)
    .subscribe(
      (response: any) => {
        // console.log('Estado del ticket actualizado con éxito:', response);
          this.selectedTicket.estado = this.ticketStatus;
          this.ticketStatus = '';  
        this.ticketWindow = '';  
      },
      (error) => {
        console.error('Error al actualizar el estado del ticket:', error);
      }
    )
  };

}
