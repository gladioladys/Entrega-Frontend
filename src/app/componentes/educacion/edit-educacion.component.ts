import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educa: Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      {
        next: (data) => {
          this.educa = data;
        }, error: (err) =>{
           alert("Error al intentar modificar educacion");
           this.router.navigate(['']);
        }
      }        
    );
  } 
   
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educa).subscribe(
      {
        next: (data) => {
        this.router.navigate(['']);
      }, error: (err) =>{
         alert("Error al modificar educacion");
         this.router.navigate(['']);
      }
      }
    );
  }  
     

}
