import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../modelo/jwt-dto';
import { LoginUsuario } from '../modelo/login-usuario';
import { NuevoUsuario } from '../modelo/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authURL = 'http://localhost:8080/auth/';
  // authURL = 'https://backendgla.herokuapp.com/auth/';
  authURL = environment.URL + 'auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
} 