import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  referenciaUsuarios!: AngularFirestoreCollection<Usuario>;
  private usuariosPath = '/usuarios';

  constructor(private db: AngularFirestore) { 

  }

  cargarUsuarios(){
    this.referenciaUsuarios = this.db.collection(this.usuariosPath)
      return this.referenciaUsuarios;
  }
  
}
