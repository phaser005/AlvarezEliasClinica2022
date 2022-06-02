import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//FIREBASE IMPORTS//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//ENVIRONMENT VARIABLES
import { environment } from '../environments/environment.prod'

//FORM IMPORTS//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { PacientesComponent } from './registro/pacientes/pacientes.component';
import { EspecialistasComponent } from './registro/especialistas/especialistas.component';
import { LoginComponent } from './paginas/login/login.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { RegistroMainComponent } from './registro/registro-main/registro-main.component';
import { AdministradoresComponent } from './registro/administradores/administradores.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PacientesComponent,
    EspecialistasComponent,
    LoginComponent,
    UsuariosComponent,
    RegistroMainComponent,
    AdministradoresComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,   //FIRESTORE
    AngularFireStorageModule, //STORAGE
    AngularFireAuthModule,    //AUTH
    BrowserAnimationsModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
