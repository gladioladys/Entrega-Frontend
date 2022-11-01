import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLogged: boolean = false;
  isLogginFail: boolean =false;
  loginUsuario!: LoginUsuario;
  
  roles: string[] = []; 
  errMsj!: string; 

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private tokenService: TokenService, private authService:AuthService, private router: Router) {
    this.form = this.formBuilder.group(
      {
        nombreUsuario:['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        password:['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
      }
    )
   }

  ngOnInit(): void {
    console.log("Prueba ngOnInit IniciarSesion!");
    if (this.tokenService.getToken()) {
      this.isLogged= true;
      this.isLogginFail= false;
      this.roles= this.tokenService.getAuthorities();
    }
    console.log(this.isLogged);
    console.log(this.isLogginFail); 
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario');
  }

  get Password(){
    return this.form.get('password');
  }

// el siguiente metodo lo puse para intentar visualizar nombre de usuario pero no lo logro
  onLogin(): void {
    console.log(this.form.value.nombreUsuario + this.form.value.password);
    this.loginUsuario = new LoginUsuario(this.form.value.nombreUsuario, this.form.value.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged= true;
      this.isLogginFail= false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles= data.authorities;     
      this.router.navigate(['home']);
    }, err => {
      this.isLogged= false;
      this.isLogginFail= true;
      this.errMsj= err.error.mensaje;
      console.log(this.errMsj);

    })    
  } 

}
