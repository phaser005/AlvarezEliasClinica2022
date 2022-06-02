import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { PacientesComponent } from './registro/pacientes/pacientes.component';

const routes: Routes = [
  { path: '', 
  component: BienvenidaComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'alta-paciente', 
    component: PacientesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
