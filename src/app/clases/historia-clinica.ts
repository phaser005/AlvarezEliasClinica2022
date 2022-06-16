import { Especialidad } from "./especialidad";
import { Usuario } from "./usuario";

export class HistoriaClinica {
    especialidad!:Especialidad;
    especialista!:Usuario;
    paciente!:Usuario; //Only admin
    dia!:string;
    hora!:string;
    estado!:string; //cancelado/aceptado/rechazado/finalizado/realizado
    reseña!:string;
    comentario!:string;
    encuesta!:string;
    cantidadAtendido!:string;

    altura!:string;
    peso!:string;
    temperatura!:string;
    presion!:string;

    dato1!:string;
    valor1!:string;

    dato2!:string;
    valor2!:string;

    dato3!:string;
    valor3!:string;
}
