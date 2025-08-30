import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";
import { Resultado } from "./Resultado";
import { IIdentificable } from "../interfaces/IIdentificable";

export class Partido implements IIdentificable {
    public resultado?: Resultado;

    constructor(
        public id: string,
        public local: Equipo,
        public visitante: Equipo,
        public deporte: Deporte,
        resultado?: Resultado
    ) {
        if (this.local === this.visitante || this.local.nombre === this.visitante.nombre) {
            throw new Error("Un partido no puede tener el mismo local y visitante");
        }
        if (resultado) this.resultado = resultado;
    }

    jugar(): boolean {
        if (this.local === this.visitante || this.local.nombre === this.visitante.nombre) {
            console.log("Un partido no puede tener el mismo local y visitante");
            return false;
        }
        if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            console.log("No se puede jugar el partido, equipos no cumplen con el estatuto");
            return false;
        }
        if (!this.resultado) {
            console.log("Debe asignarse un resultado antes de jugar el partido");
            return false;
        }
        console.log(
            `Partido jugado: ${this.local.nombre} vs ${this.visitante.nombre} - ${this.resultado.toString()}`
        );
        return true;
    }

    toString(): string {
        return `Partido ${this.local.nombre} vs ${this.visitante.nombre} - ${
            this.resultado ? this.resultado.toString() : "Pendiente"
        }`;
    }
}
