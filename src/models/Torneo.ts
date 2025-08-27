import { Partido } from "./Partido";

export class Torneo {
    private listaDePartidos: Partido[] = [];

    constructor(public id: number, public nombre: string) {}

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

    buscarPartido(id: number): Partido | undefined {
        const partido = this.listaDePartidos.find(p => p.id === id);
        if (!partido) {
            console.log(`No se encontró el partido con id ${id}`);
        }
        return partido;
    }
}
