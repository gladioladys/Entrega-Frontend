import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.nombreE);
    console.log(this.descripcionE);
    const edu = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(edu).subscribe(
      {
        next: () => {
          alert("Educacion agregada");
          this.router.navigate(['']);
        }, error: (err) => {
          alert("Falla al agregar Educacion");
          this.router.navigate(['']);
        }
      }
      );
  }
} 
