import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/modelo/habilidad';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string = '';
  porcentajeH: number = null;
 
  constructor(private sHabilidad: SHabilidadService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    console.log(this.nombreH);
    console.log(this.porcentajeH);
    const habi = new Habilidad(this.nombreH, this.porcentajeH);
    this.sHabilidad.save(habi).subscribe(
      {
        next: () => {
          alert("Habilidad agregada");
          this.router.navigate(['']);
        }, error: (err) => {
          alert("Falla al agregar Habilidad");
          this.router.navigate(['']);
        }
      }
      );
  }   
}
