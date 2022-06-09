import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'
import { FirebaseService } from '../../servicios/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public listaUsuarios:Usuario[] = [];

  private email!:string;
  private password!:string;

  constructor(private fb:FormBuilder, private auth:AuthService, private firebase:FirebaseService) {

    this.form = this.fb.group({
      'email': ['', [
        Validators.required, 
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    }); 

   }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      //this.listaUsuarios = data;
      this.filtroUsuarios(data);
    })
  }

  async LogMeIn(){
    this.email = this.form.get("email")?.value;
    this.password = this.form.get("password")?.value;

    //this.auth.logMeIn(this.form.get("email")?.value, this.form.get("password")?.value)
    if(this.auth.verificarCredenciales(this.listaUsuarios, this.email, this.password)){
      this.auth.logMeIn(this.listaUsuarios, this.email, this.password);
    }else{
      alert("Credenciales Incorrectas");
    }
  }

  AutoCompleteValidUser(email:string, password:string){
        this.form.get('email')?.setValue(email);
        this.form.get('password')?.setValue(password);
        this.LogMeIn();
  }

  private filtroUsuarios(usuarios:Usuario[]){
    var administrador:number = 0;
    var paciente:number = 0;
    var especialista:number = 0;

    if(administrador === 0){
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo === "administrador" && this.listaUsuarios.length < 1){
          this.listaUsuarios.push(usuarios[i]);
          administrador ++;
        }
      }
    }

    if(paciente === 0){
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo === "paciente" && this.listaUsuarios.length < 4){
          this.listaUsuarios.push(usuarios[i]);
          paciente ++;
        }
      }
    }

    if(especialista === 0){
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo === "especialista" && this.listaUsuarios.length < 6){
          this.listaUsuarios.push(usuarios[i]);
          especialista ++;
        }
      }
    }


  }

}
