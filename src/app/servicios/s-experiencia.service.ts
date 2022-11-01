import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  // expURL='http://localhost:8080/explab/';
  // expURL='https://backendgla.herokuapp.com/explab/';
  expURL = environment.URL + 'explab/'; 

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'listar');
   }

  public detail(id: number) : Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }
   
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', experiencia);
  }

  public update(id: number, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  } 
}
