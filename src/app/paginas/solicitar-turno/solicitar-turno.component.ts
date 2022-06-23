import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario'
import { Especialidad } from "../../clases/especialidad";
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {

  public listaUsuarios:Usuario[] = [];
  public listaEspecialidades: Especialidad[] = [];
  public listaTurnos: string[] = ["algo", "algo2", "algo3"];

  public especialidadesDelEspecialista: Especialidad[] = [];

  public especialista:boolean = false;
  public especialidad:boolean = false;

  constructor(private firebase:FirebaseService, private auth:AuthService) { }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      data.forEach(user => {
        if(user.tipo === "especialista"){
          this.listaUsuarios.push(user);
        }
      });
    })
    this.firebase.cargarEspecialidades().valueChanges().subscribe(data =>{
      this.listaEspecialidades = data;
      console.log(this.listaEspecialidades)
    })
  }

  especialistaSeleccionado(especialista:Usuario){
    console.log("Eligio a: " + especialista.nombre);
    this.especialista = true;
    
    this.cargarEspecialidades(especialista)
  }

  cargarEspecialidades(especialista:Usuario){
    this.especialidadesDelEspecialista = []
    this.listaEspecialidades.forEach(especialidad => {
      especialista.especialidad.forEach(especialidadEspecialista => {
        if(especialidad.especialidad === especialidadEspecialista){
          this.especialidadesDelEspecialista.push(especialidad);
        }
      });
    });
  }

  especialidadSeleccionada(especialidad:Especialidad){
    console.log("Eligio la especialidad: " + especialidad.especialidad);
    this.especialidad = true;

  }

  verificarUsuario(){
    var tipo =""
    var user: Usuario;
    if(this.auth.SearchLogData() === true){
      user = this.auth.loadLoginData()
      tipo = user.tipo;
    }
    return tipo;
  }
}
