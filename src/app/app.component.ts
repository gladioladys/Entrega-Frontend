import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Mi Proyecto';
  owner = {nombre:'Gladis',
          apellido: 'Battezzato'};
  saludo(){return 'Hola, soy ' + this.owner.nombre + ' ' + this.owner.apellido
          };
}