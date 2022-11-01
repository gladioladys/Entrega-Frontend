import { Component, OnInit } from '@angular/core';
// La siguiente linea es para habilitar el icono del signo mas de FontAwesone
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  // La siguiente linea es para habilitar el icono del signo mas de FontAwesone
  // faPlus = faPlus;

  expe: Experiencia[] = [];
  color1:string = "purple";
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencias(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe({
        next: (data) => {
          this.cargarExperiencias();
        }, error: (err) => {
          alert("No se pudo borrar la experiencia");
        }
      })
    }
  } 
}