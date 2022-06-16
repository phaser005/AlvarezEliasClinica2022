import { Especialidad } from "./especialidad";
import { Usuario } from "./usuario";

export class Turno {
    especialidad!:Especialidad;
    especialista!:Usuario;
    paciente!:Usuario; //Only admin
    dia!:string;
    hora!:string;
    estado!:string; //cancelado/aceptado/rechazado/finalizado/realizado
    reseña!:string;
    comentario!:string;
    encuesta!:string;
}
