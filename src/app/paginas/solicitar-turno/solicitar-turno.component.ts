import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario'
import { FirebaseService } from '../../servicios/firebase.service'

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {

  public listaUsuarios:Usuario[] = [];

  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      this.listaUsuarios = data;
    })
  }

}
