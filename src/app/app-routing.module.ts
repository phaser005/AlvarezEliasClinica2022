import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { SolicitarTurnoComponent } from './paginas/solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', 
  component: BienvenidaComponent, 
  data: {animation: 'stepper'}  
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: {animation: 'fader'} 
  },
  { 
    path: 'usuarios', 
    component: UsuariosComponent,
    data: {animation: 'stepper'} 
  },
  { 
    path: 'mi-perfil', 
    component: MiPerfilComponent,
    data: {animation: 'stepper'} 
  },
  { path: 'registro', loadChildren: () => import('./lazyLoad/registro/registro-routing.module').then(m => m.RegistroRoutingModule), 
  },
  { path: 'turnos', loadChildren: () => import('./lazyLoad/turnos/turnos-routing.module').then(m => m.TurnosRoutingModule), data: {animation: 'stepper'} 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
