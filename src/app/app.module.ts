import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Barra de Navegacion Bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { HttpClientModule } from '@angular/common/http'; 

// Modulo del Sistema de Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './componentes/header/header.component'; 
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
// import { SocialComponent } from './componentes/social/social.component'; 
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';

import { PortfolioService } from './servicios/portfolio.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { NewHabilidadComponent } from './componentes/habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './componentes/habilidad/edit-habilidad.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    // SocialComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    FooterComponent,
    BarraNavComponent,
    HomeComponent,
    LoginComponent,
    IniciarSesionComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    HabilidadComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Modulo de Rutas
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule, NgxNavbarModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
