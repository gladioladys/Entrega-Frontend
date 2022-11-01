import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../modelo/habilidad';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadService {
  habURL = environment.URL + 'habilidad/'; 

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'listar');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'crear', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `borrar/${id}`);
  } 
}
