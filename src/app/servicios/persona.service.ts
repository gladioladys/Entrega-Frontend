import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { persona } from '../modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  // URL = 'http://localhost:8080/personas/'; //HAY QUE AGREGAR LA / AL FINAL
  // URL = 'https://backendgla.herokuapp.com/personas/';
  URL = environment.URL + 'personas/';  

  constructor(private http:HttpClient) { }

  getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  } 
}
