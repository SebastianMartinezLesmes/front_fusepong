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
  };
  getProjects() {
    this.http.get('http://localhost:8000/proyects').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.projects = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getTickets() { 
    this.http.get('http://localhost:8000/tickets').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.tickets = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };
  getUsers() { 
    this.http.get('http://localhost:8000/users').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      }, (error) => { console.error('Error al obtener las compañias del servidor:', error); }
    )
  };

  selectedCompany: any = null;
  nameNewProyect: string = '';
  getComp(comp: any): void {
    console.log('Datos de la compañía seleccionada:', comp);
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
    
    // Construir el objeto del proyecto a enviar
    const nuevoProyecto = {
      idProyecto: this.projects.length + 1, // Aquí puedes generar un ID único
      titulo: this.nameNewProyect,
      empresaFK: this.selectedCompany.idEmpresa,  // Suponiendo que `nit` es el ID de la empresa
    };

    // Realizar la solicitud POST
    this.http.post('http://localhost:8000/createProyects', nuevoProyecto).subscribe(
      (response) => {
        console.log('Proyecto agregado con éxito:', response);
        this.projects.push(response); // Agregar el proyecto al listado de proyectos
        this.nameNewProyect = ''; // Limpiar el campo de nombre del proyecto
        this.selectedCompany = null; // Limpiar la compañía seleccionada
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
    console.log('Datos del Proyecto seleccionada:', proj);
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

    // Construir el objeto ticket a enviar
    const nuevoTicket = {
      idTicket: this.tickets.length + 1, // ID único para el ticket
      desc: this.ticketDesc,
      comentarios: [
        {
          idComent: 0, // Aquí puedes ajustar la lógica para manejar los comentarios si es necesario
          comentario: this.ticketComentarios
        }
      ],
      estado: this.ticketEstado,
      proyectoFK: this.selectedProject.idProyecto, // ID del proyecto
      usuarioFK: this.selectedUserId, // ID del usuario 
    };
    console.log(nuevoTicket)

    // Realizar la solicitud POST para agregar el ticket
    this.http.post('http://localhost:8000/createTickets', nuevoTicket).subscribe(
      (response) => {
        console.log('Ticket agregado con éxito:', response);
        this.tickets.push(response); // Agregar el ticket al listado de tickets
        this.ticketDesc = ''; // Limpiar el campo de descripción
        this.ticketEstado = ''; // Limpiar el campo de estado
        this.ticketComentarios = ''; // Limpiar los comentarios
        this.selectedProject = null; // Limpiar el proyecto seleccionado
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
    console.log('Datos del ticket seleccionada:', ticket);
    this.selectedTicket = ticket;
    this.ticketWindow = action; // Cambia la ventana según la acción seleccionada
  };
  closeWindowTicket(){
    this.selectedTicket = null;
  };

  postComentTicket(){
    if (!this.ticketComentarios) {
      console.error('Faltan datos para agregar el ticket');
      return;
    }
  };

  putDescTicket(){
    if (!this.ticketDesc) {
      console.error('Faltan datos para actualizar la descripcion del ticket');
      return;
    }
  };

  putStatusTicket(){
    if (!this.ticketStatus) {
      console.error('Faltan datos para actualizar el estado del ticket');
      return;
    }
  };

}
