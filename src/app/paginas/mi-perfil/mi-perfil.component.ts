import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public myInfo!:Usuario;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.myInfo = this.auth.loadLoginData();
  }

}
