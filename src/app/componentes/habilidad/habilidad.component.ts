import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelo/habilidad';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habi: Habilidad[] = [];
  color1:string = "yellow";
  constructor(private sHabilidad: SHabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }         
  }
  cargarHabilidades(): void {
    this.sHabilidad.lista().subscribe(data => { this.habi = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sHabilidad.delete(id).subscribe({
        next: (data) => {
          this.cargarHabilidades();
        }, error: (err) => {
          alert("No se pudo borrar la habilidad");
        }
      })
    }
  } 

}
