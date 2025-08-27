import { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
    private jugadores: Jugador[] = [];

    constructor(public nombre: string) {}

    listarIntegrantes(): string[] {
        return this.jugadores.map(j => j.nombre);
    }

    get cantidad(): number {
        return this.jugadores.length;
    }

    agregarJugador(jugador: Jugador): void {
        if (this.jugadores.find(j => j.id === jugador.id)) {
            console.log(`El jugador ${jugador.nombre} ya está en el equipo`);
            return;
        }
        this.jugadores.push(jugador);
        console.log(`El equipo ${this.nombre} agregó a ${jugador.nombre}`);
    }

    toString(): string {
        return `Los jugadores del equipo ${this.nombre} son: ${this.listarIntegrantes().join(', ')}`;
    }
}
