import { Partido } from "./Partido";
import { IIdentificable } from "../interfaces/IIdentificable";

export class Torneo implements IIdentificable {
    private listaDePartidos: Partido[] = [];

    constructor(public id: string, public nombre: string) {
        if (!id || id.trim() === "") {
            throw new Error("El id del torneo no puede estar vacío");
        }
        if (!nombre || nombre.trim() === "") {
            throw new Error("El nombre del torneo no puede estar vacío");
        }
    }

    programarPartido(partido: Partido): void {
        if (!partido) {
            console.log("No se puede programar un partido vacío");
            return;
        }
        if (this.listaDePartidos.find(p => p.id === partido.id)) {
            console.log(`El partido con id ${partido.id} ya está programado`);
            return;
        }
        if (partido.local === partido.visitante || partido.local.nombre === partido.visitante.nombre) {
            console.log("Un equipo no puede jugar contra sí mismo");
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
        if (!id || id.trim() === "") {
            console.log("El id de partido no puede estar vacío");
            return;
        }
        const partido = this.listaDePartidos.find(p => p.id === id);
        if (!partido) {
            console.log(`No se encontró el partido con id ${id}`);
        }
        return partido;
    }
}
