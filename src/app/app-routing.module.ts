import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { SolicitarTurnoComponent } from './paginas/solicitar-turno/solicitar-turno.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', 
  component: BienvenidaComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'usuarios', 
    component: UsuariosComponent 
  },
  { 
    path: 'mi-perfil', 
    component: MiPerfilComponent 
  },
  { 
    path: 'solicitar-turno', 
    component: SolicitarTurnoComponent 
  },
  { path: 'registro', loadChildren: () => import('./lazyLoad/registro/registro-routing.module').then(m => m.RegistroRoutingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
