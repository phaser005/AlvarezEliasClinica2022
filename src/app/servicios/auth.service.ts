import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../servicios/firebase.service'
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  imageStoragePath = "gs://alvarezeliasclinica2022.appspot.com/userImages";

  rutaUsuarios = "/usuarios";
  referenciaUsuarios: AngularFirestoreCollection<Usuario>;
  nuevoUsuario: Usuario;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private storage:AngularFireStorage,private router:Router, private firebase: FirebaseService, private spinnerSvc:SpinnerService) {
    this.referenciaUsuarios = db.collection(this.rutaUsuarios);
    this.nuevoUsuario = new Usuario();
   }

   async AddNewUser(usuario: Usuario){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
      if(usuario.email){
        if(user.user?.uid){
          this.referenciaUsuarios.add({...usuario});
          if(usuario.tipo === "paciente" || usuario.tipo === "especialista"){
            user.user.sendEmailVerification().then(function() {
              alert("Email Enviado")
            }).catch(function(error) {
              alert(error)
            });
          }
        }
        this.router.navigate(['/login']);
      } else {
        throw new Error;
      }
    }catch (e) {
      alert(e.message);
    }
  }

  /*async logMeIn2(email: string, password: string){
    this.spinnerSvc.show();
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, password);
      if(email){
        if(user.user?.uid){
          this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
            data.forEach(usuario => {
                if(usuario.email === email ){
                  if(usuario.tipo === "paciente"){
                    this.saveLoginData(usuario);
                    this.router.navigateByUrl('/');
                  }else if(usuario.tipo === "especialista"){
                    if(usuario.habilitado === true && user.user?.emailVerified === true){
                      this.saveLoginData(usuario);
                      this.router.navigateByUrl('/');
                    }else{
                      alert("No esta habilitado para ingresar");
                    }
                  }else if(usuario.tipo === "administrador"){
                    this.saveLoginData(usuario);
                    this.router.navigateByUrl('/');
                  }else{
                    alert("Credenciales incorrectas");
                  }
                
              }
            });
          })
        }
      } else {
        throw new Error;
      }
    }catch (e) {
      alert(e.message);
    }
    this.spinnerSvc.hide();
  }*/

  verificarCredenciales(listadoUsuarios:Usuario[], email:string, password:string):boolean{
    var usuarioExiste = false;
    for (let index = 0; index < listadoUsuarios.length; index++) {
      if(listadoUsuarios[index].email === email && listadoUsuarios[index].password === password){
        usuarioExiste = true;
        break;
      }
    }
    return usuarioExiste;
  }

  verificarHabilitacion(listadoUsuarios:Usuario[], email:string, password:string):boolean{
    var habilitado = false;
    for (let index = 0; index < listadoUsuarios.length; index++) {
      if(listadoUsuarios[index].email === email && listadoUsuarios[index].tipo === "especialista"){
        habilitado = listadoUsuarios[index].habilitado;
        break;
      }
    }
    return habilitado;
  }

  verificarAdmin(listadoUsuarios:Usuario[], email:string, password:string):boolean{
    var admin:boolean = false;
    for (let index = 0; index < listadoUsuarios.length; index++) {
      if(listadoUsuarios[index].email === email && listadoUsuarios[index].tipo === "administrador"){
        admin = true
        break;
      }
    }
    return admin;
  }

  async verificicarMail(listadoUsuarios:Usuario[], email:string, password:string){
    var mailVerificado = false;
    await this.auth.signInWithEmailAndPassword(email, password).then((user) => {
      if(user.user?.emailVerified === true){
        //alert("Mail: " + email + " - Verified?: " + user.user?.emailVerified);
        mailVerificado = true;
      }
      
    }).finally(()=>{
      this.auth.signOut();
    });

    return mailVerificado;
  }


  async logMeIn(listaUsuarios:Usuario[], email: string, password: string){
    var habilitado!:boolean;
    var verificado!:boolean;
    var admin!:boolean;
    this.spinnerSvc.show();

    habilitado = this.verificarHabilitacion(listaUsuarios, email, password);
    admin = this.verificarAdmin(listaUsuarios, email, password);

    await this.verificicarMail(listaUsuarios, email, password).then((value) =>{
      verificado = value;

      if(admin){
        this.logIn(listaUsuarios, email, password);
        this.router.navigateByUrl('/');
      }else{
        if(verificado){
          if(habilitado){
            //alert("Mail verificado y habilitado!");
            this.logIn(listaUsuarios, email, password);
            this.router.navigateByUrl('/');
          }else{
            alert("Su email se encuentra verificado pero aun no ha sido aprobado por un administrador.");
          }
        }else{
          alert("Debe verificar su cuenta de email para poder entrar");
        }
      }

    })

    this.spinnerSvc.hide();
  }

  logIn(listadoUsuarios:Usuario[], email: string, password: string){
    for (let index = 0; index < listadoUsuarios.length; index++) {
      if(listadoUsuarios[index].email === email){
        this.auth.signInWithEmailAndPassword(email, password);
        this.saveLoginData(listadoUsuarios[index]);
        break;
      }
    }
  }

  logOut(){
    this.deleteLoginData();
    this.router.navigateByUrl('/');
  }

  habilitarUsuario(email:string){
    this.referenciaUsuarios.get().toPromise().then((snapshot) =>{
      snapshot.docs.forEach(doc =>{
        if(doc.data().email === email && doc.data().habilitado === false){
          this.db.collection("usuarios").doc(doc.id).update({
            "habilitado":true
          })
          alert(doc.data().email + " ahora esta habilitado");
        }
      })
    })
  }

  deshabilitarUsuario(email:string){
    this.referenciaUsuarios.get().toPromise().then((snapshot) =>{
      snapshot.docs.forEach(doc =>{
        if(doc.data().email === email && doc.data().habilitado === true){
          this.db.collection("usuarios").doc(doc.id).update({
            "habilitado":false
          })
          alert(doc.data().email + " ahora esta deshabilitado");
        }
      })
    })
  }

  saveLoginData(user: Usuario){
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }

  loadLoginData(){
    var userData = localStorage.getItem("loggedInUser");
    if(userData != null){
      var user = JSON.parse(userData);
    }
    return user;
  }

  deleteLoginData(){
    localStorage.removeItem("loggedInUser");
  }

  SearchLogData():boolean{
    var loggedIn = false;
    if(localStorage.getItem("loggedInUser") != null){
      loggedIn = true;
    }else if(localStorage.getItem("loggedInUser") === null){
      loggedIn = false;
    }
  
    return loggedIn;
  }
}
