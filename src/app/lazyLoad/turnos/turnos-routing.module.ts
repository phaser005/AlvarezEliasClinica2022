import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisTurnosComponent } from 'src/app/paginas/mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from 'src/app/paginas/solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from 'src/app/paginas/turnos/turnos.component';

const routes: Routes = [
  { 
    path: 'solicitar-turno', 
    component: SolicitarTurnoComponent 
  },
  { 
    path: 'turnos', 
    component: TurnosComponent 
  },
  { 
    path: 'mis-turnos', 
    component: MisTurnosComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
