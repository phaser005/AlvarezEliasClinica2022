import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Especialidad } from '../clases/especialidad';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  referenciaUsuarios!: AngularFirestoreCollection<Usuario>;
  private usuariosPath = '/usuarios';

  referenciaEspecialidad!: AngularFirestoreCollection<Especialidad>;
  private especialidadesPath = '/especialidades';

  constructor(private db: AngularFirestore) { 

  }

  cargarUsuarios(){
    this.referenciaUsuarios = this.db.collection(this.usuariosPath)
      return this.referenciaUsuarios;
  }

  cargarEspecialidades(): AngularFirestoreCollection<Especialidad>{
    this.referenciaEspecialidad = this.db.collection(this.especialidadesPath)
    return this.referenciaEspecialidad;
  }

  guardarNuevaEspecialidad(especialidad:Especialidad){
    this.referenciaEspecialidad.add({...especialidad});
  }
  
}
