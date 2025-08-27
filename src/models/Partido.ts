import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";
import { Resultado } from "./Resultado";

export class Partido {
    public resultado?: Resultado;

    constructor(
        public id: number,
        public local: Equipo,
        public visitante: Equipo,
        public deporte: Deporte,
        resultado?: Resultado
    ) {
        if (resultado) this.resultado = resultado;
    }

    jugar(): boolean {
        if (this.local.nombre === this.visitante.nombre) {
            console.log("Un partido no puede tener el mismo local y visitante");
            return false;
        }
        if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            console.log("No se puede jugar el partido, equipos no cumplen con el deporte");
            return false;
        }
        if (!this.resultado) {
            console.log("Debe asignarse un resultado antes de jugar el partido");
            return false;
        }
        console.log(`Partido jugado: ${this.local.nombre} vs ${this.visitante.nombre} - ${this.resultado.toString()}`);
        return true;
    }

    toString(): string {
        return `Partido ${this.local.nombre} vs ${this.visitante.nombre} - ${this.resultado ? this.resultado.toString() : "Pendiente"}`;
    }
}
