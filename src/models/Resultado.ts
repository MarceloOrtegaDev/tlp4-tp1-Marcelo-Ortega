

export class Resultado {
    constructor (public golesLocal:number, public golesVisitante:number) {
        this.golesLocal = golesLocal
        this.golesVisitante = golesVisitante
    }

    toString(): void{
        if(this.golesLocal < 0 || this.golesVisitante < 0){
            return console.log("No pueden haber menos de 0 goles");
        } else if(this.golesLocal > this.golesVisitante) {
            return console.log(`Ganó el equipo local por ${this.golesLocal} - ${this.golesVisitante}`);
        } else if (this.golesLocal < this.golesVisitante) {
            return console.log(`Ganó el equipo visitante por ${this.golesVisitante} - ${this.golesLocal}`);
        } else {
            return console.log(`Los equipos empataron ${this.golesLocal} - ${this.golesVisitante}`);
        }  
    }
}

