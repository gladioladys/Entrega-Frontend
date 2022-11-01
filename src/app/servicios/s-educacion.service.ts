import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../modelo/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  // eduURL='http://localhost:8080/educacion/';
  // eduURL='https://backendgla.herokuapp.com/educacion/';
  eduURL= environment.URL + 'educacion/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'listar');
   }

  public detail(id: number) : Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }
   
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'crear', educacion);
  }

  public update(id: number, educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `borrar/${id}`);
  } 
} 
