import { Partido } from "./Partido";
import { IIdentificable } from "../interfaces/IIdentificable";

export class Torneo implements IIdentificable{
    private listaDePartidos: Partido[] = [];

    constructor(public id: string, public nombre: string) {}

    programarPartido(partido: Partido): void {
        if (this.listaDePartidos.find(p => p.id === partido.id)) {
            console.log(`El partido con id ${partido.id} ya está programado`);
            return;
        }
        this.listaDePartidos.push(partido);
        console.log(`Partido programado: ${partido.local.nombre} vs ${partido.visitante.nombre}`);
    }

    listarPartidos(): void {
        if (this.listaDePartidos.length === 0) {
            console.log("No hay partidos programados");
            return;
        }
        this.listaDePartidos.forEach(p => console.log(p.toString()));
    }

    buscarPartido(id: string): Partido | undefined {
        const partido = this.listaDePartidos.find(p => p.id == id);
        if (!partido) {
            console.log(`No se encontró el partido con id ${id}`);
        }
        return partido;
    }
}
