import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  // login() {
  //   const inputUsername = this.email;
  //   const inputPassword = this.password;

  //   if (this.email === '' || this.password === '') {
  //     // Al menos uno de los campos está vacío
  //     let camposVacios = '';
  //     let cont = 0;

  //     if (this.email === '') {
  //       camposVacios += 'Email, ';
  //       cont = cont + 1;
  //     }
  //     if (this.password === '') {
  //       camposVacios += 'Contraseña, ';
  //       cont = cont + 1;
  //     }

  //     camposVacios = camposVacios.slice(0, -2); // Eliminar la coma y el espacio al final
  //     if (cont === 2) { this.presentAlert("Los siguientes campos son requeridos para ingresar a la paguina", "" + camposVacios); }
  //     else { this.presentAlert("El campo " + camposVacios, "Es requerido para ingresar a la paguina"); }
  //   }
  //   else {

  //     let credenciales = {
  //       email: this.email,
  //       password: this.password
  //     }

  //     /*metodo para enviar credenciales*/
  //     axios.post('http://localhost:8080/api/users/login', credenciales)
  //       .then(response => {
  //         console.log('Respuesta del servidor:', response.data);
  //         this.token = response;

  //         this.idU = response.data[0];
  //         this.tokenKey = response.data[1];
  //         this.cargo = response.data[2];

  //         this.getHistorialF();

  //         if( this.cargo === 'administrador' ){ 
  //           this.mostrarManga_ADMIN();
  //           this.presentAlert("usuario registrado", "ahora puedes administrar la paguina"); this.getUser();
  //         }
  //         else{ 
  //           this.mostrarManga();
  //           this.presentAlert("usuario registrado", "ahora puedes alquilar tu manga"); 
  //         }
  //         this.changeList();
  //         //requestHeaders
  //         console.log(this.requestHeaders);
  //         console.log('aca esta el token: ' + this.tokenKey);

  //       })
  //       .catch(error => {
  //         console.error('Error al enviar datos al servidor:', error);
  //         console.log(this.requestHeaders);
  //         this.presentAlert("usuario inexistente", "");
  //       });
  //   } 
  //   this.limpiar();
  //   this.list = 'false';
  // };
}
