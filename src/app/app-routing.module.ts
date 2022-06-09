import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { AdministradoresComponent } from './registro/administradores/administradores.component';
import { EspecialistasComponent } from './registro/especialistas/especialistas.component';
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
  { 
    path: 'alta-especialista', 
    component: EspecialistasComponent 
  },
  { 
    path: 'alta-administrador', 
    component: AdministradoresComponent 
  },
  { 
    path: 'usuarios', 
    component: UsuariosComponent 
  },
  { 
    path: 'mi-perfil', 
    component: MiPerfilComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
