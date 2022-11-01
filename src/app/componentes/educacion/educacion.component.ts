import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  color1:string = "green"; 
  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducaciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducaciones(): void {
    this.sEducacion.lista().subscribe(data => { this.edu = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe({
        next: (data) => {
          this.cargarEducaciones();
        }, error: (err) => {
          alert("No se pudo borrar la educacion");
        }
      })
    }
  }

} 
