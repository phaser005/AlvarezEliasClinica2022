import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresComponent } from '../../registro/administradores/administradores.component';
import { EspecialistasComponent } from '../../registro/especialistas/especialistas.component';
import { PacientesComponent } from '../../registro/pacientes/pacientes.component';

const routes: Routes = [
  { 
    path: 'paciente', 
    component: PacientesComponent  
  },
  { 
    path: 'especialista', 
    component: EspecialistasComponent
  },
  { 
    path: 'administrador', 
    component: AdministradoresComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
