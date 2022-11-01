import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/modelo/habilidad';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  skill: Habilidad = null;

  constructor(private sHabilidad: SHabilidadService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      {
        next: (data) => {
          this.skill = data;
        }, error: (err) =>{
           alert("Error al modificar habilidad");
           this.router.navigate(['']);
        }
      }        
    );    
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.skill).subscribe(
      {
        next: (data) => {
        this.router.navigate(['']);
      }, error: (err) =>{
         alert("Error al modificar habilidad");
         this.router.navigate(['']);
      }
      }
    );
  }   

  
}
