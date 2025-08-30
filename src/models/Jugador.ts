import { IIdentificable } from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable {
    constructor(
        readonly id: string,
        public nombre: string,
        public edad: number,
        public posicion?:string
    ){}

    get toString(): string {
        return `Id del jugador: ${this.id} - De nombre ${this.nombre} tiene ${this.edad} años ${this.posicion ? `juega de ${this.posicion}`: " "} `;
    }
}