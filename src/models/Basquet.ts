import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Basquet extends Deporte {
    constructor (nombre:string, maxPorEquipo:number) {
        super(nombre, maxPorEquipo)
    }

    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxPorEquipo) {
            console.log(`El equipo ${equipo.nombre} solo puede tener ${this.maxPorEquipo} jugadores`);
            return false;
        }
            return true;
    }
}