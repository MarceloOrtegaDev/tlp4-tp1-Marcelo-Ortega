export class Jugador {
    constructor(
        readonly id: string,
        public nombre: string,
        public edad: number,
        public posicion?:string
    ){}

    public toString():void{
        return console.log(`Id del jugador: ${this.id} - De nombre ${this.nombre} tiene ${this.edad} años ${this.posicion ? `juega de ${this.posicion}`: " "} `);
    }
}