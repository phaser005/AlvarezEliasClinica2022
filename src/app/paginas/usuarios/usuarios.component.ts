import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario'
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'
import { ExcelGeneratorService } from "../../servicios/excel-generator.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  public listaUsuarios:Usuario[] = [];

  constructor(private firebase:FirebaseService, private auth:AuthService, private excelGenerator: ExcelGeneratorService) { }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      this.listaUsuarios = data;
    })
  }

  habilitarUsuario(email:string){
    this.auth.habilitarUsuario(email);
  }

  deshabilitarUsuario(email:string){
    this.auth.deshabilitarUsuario(email);
  }

  generateExcel(){
    this.excelGenerator.exportToExcel(this.listaUsuarios, 'Listado de Usuarios');
  }

}
