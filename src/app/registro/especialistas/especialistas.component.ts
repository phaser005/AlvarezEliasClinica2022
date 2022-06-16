import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'
import { CaptchaService } from '../../servicios/captcha.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { Usuario } from '../../clases/usuario'
import { Especialidad } from '../../clases/especialidad'

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.css']
})
export class EspecialistasComponent implements OnInit {

  public imageA: any;

  public especialistaForm!: FormGroup;
  public especialidades!:Especialidad[];

  constructor(private fb:FormBuilder, private firebase:FirebaseService, private captcha:CaptchaService, private firestorage: AngularFireStorage, private auth:AuthService) {
    this.especialidades = [];
  }

  ngOnInit(): void {

    this.captcha.generateCaptcha();
    
    this.especialistaForm = this.fb.group({
      'nombre': ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*")
      ]],
      'apellido': ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*")
      ]],
      'edad': ['', [
        Validators.required,
        Validators.min(18),
        Validators.pattern("^[0-9]*")
      ]],
      'dni': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("^[0-9]*")
      ]],
      'especialidad': [''],
      'especialidadEscrita': [''],
      'checkbox':[''],
      'email': ['', [
        Validators.required, 
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      'imagen1': ['', Validators.required]
    })

    this.firebase.cargarEspecialidades().valueChanges().subscribe(data => {
      data.forEach(especialidad => {
        if(especialidad.aprobada === true)
        this.especialidades.push(especialidad);
      });
      //this.especialidades = data;
      console.log(this.especialidades);
    })
  }

  onFileSelected(event:any){
    this.imageA = event.target.files[0];
  }

  cambiarEspecialidad(e:any) {
    this.especialistaForm.controls['especialidad'].setValue(e.target.value);
    this.especialistaForm.controls['especialidadEscrita'].setValue(e.target.value);
  }

  tomarEspecialidades():string[]{
    var result:string[] = [];
    for (let index = 0; index < this.especialidades.length; index++) {
      if((<HTMLInputElement>document.getElementById(index.toString())).checked){
        result.push((<HTMLInputElement>document.getElementById(index.toString())).value);
      }
    }
    console.log(result);
    return result;
  }

  async enviar(){

    if(this.captcha.checkCaptcha()){
      var nuevoUsuario = await this.createUser();
      //console.log(nuevoUsuario);
    }else{
      alert("Captcha Incorrecto!");
    }    

    //this.auth.uploadImage();
  }

  async createUser(){
    var nuevoUsuario = new Usuario();
    var especialidadEscrita = this.especialistaForm.get("especialidadEscrita")?.value

    nuevoUsuario.nombre = this.especialistaForm.get("nombre")?.value;
    nuevoUsuario.apellido = this.especialistaForm.get("apellido")?.value;
    nuevoUsuario.edad = Number(this.especialistaForm.get("edad")?.value);
    nuevoUsuario.DNI = Number(this.especialistaForm.get("dni")?.value);
    nuevoUsuario.especialidad = this.tomarEspecialidades();
    nuevoUsuario.email = this.especialistaForm.get("email")?.value;
    nuevoUsuario.password = this.especialistaForm.get("password")?.value;
    nuevoUsuario.tipo = "especialista"
    nuevoUsuario.habilitado = false;

    if(especialidadEscrita != ""){
      var nuevaEspecialidad:Especialidad = new Especialidad()
      nuevaEspecialidad.aprobada = false;
      nuevaEspecialidad.imagen = "";
      nuevaEspecialidad.especialidad = especialidadEscrita;
      this.firebase.guardarNuevaEspecialidad(nuevaEspecialidad);
    }
    await this.saveImage(nuevoUsuario, this.imageA);
    return nuevoUsuario
  }

  async saveImage(usuario:Usuario, imageA:any){

    var storageRef = this.firestorage.storage.ref();

    let referencia = `userImages/${imageA.name}`;

    var uploadTask = storageRef.child(referencia).put(imageA).then(element => {

      this.firestorage.storage.ref(referencia).getDownloadURL().then((link) => {
        usuario.imagen1 = link;
        this.auth.AddNewUser(usuario);
        
      })
    });

  }

}
