import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  // miPortfolio:any;
  // constructor(private datosPortfolio:PortfolioService) { }

  // ngOnInit(): void {
  //   this.datosPortfolio.probarServicio();
  //   this.datosPortfolio.obtenerDatos().subscribe(data =>{
  //     console.log(data);
  //     this.miPortfolio=data;
  //   });
  // }

  persona: persona = new persona("","","","","");

  constructor(public personaService: PersonaService) { }
 
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data)
  } 
  
}
