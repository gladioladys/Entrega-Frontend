import { ThisReceiver } from "@angular/compiler";

export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    imgFoto: String;
    imgLogo: String;
    detalle: String;

    constructor (nombre: String, apellido: String, imgFoto: String, imgLogo: String, detalle: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imgFoto = imgFoto;
        this.imgLogo = imgLogo;
        this.detalle = detalle;
    }
}