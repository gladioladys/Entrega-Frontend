import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component'; 
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './componentes/habilidad/edit-habilidad.component';
import { NewHabilidadComponent } from './componentes/habilidad/new-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './componentes/login/login.component';

// Importamos nuestros componentes


// Definimos nuestras rutas

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component:  NewExperienciaComponent}, 
  {path: 'editexp/:id', component:  EditExperienciaComponent},
  {path: 'nuevaedu', component:  NewEducacionComponent}, 
  {path: 'editedu/:id', component:  EditEducacionComponent},
  {path: 'nuevahabi', component:  NewHabilidadComponent}, 
  {path: 'edithabi/:id', component:  EditHabilidadComponent},
  //  Configurar rutas por defecto.
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  //  Configurar ruteo a Componente de Prueba de IniciarSesion.
  // {path: 'login', component: IniciarSesionComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'}
  
  //  Ver como Configurar Pagina 404.
  // {path: '**', component: Pagina404Component}
];

@NgModule({
// Cargamos nuestras rutas
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
 