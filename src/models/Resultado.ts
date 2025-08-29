

export class Resultado {
    constructor (public golesLocal:number, public golesVisitante:number) {
        this.golesLocal = golesLocal
        this.golesVisitante = golesVisitante
    }

    toString(): string{
        if(this.golesLocal < 0 || this.golesVisitante < 0){
            return "No pueden haber menos de 0 goles";
        } else if(this.golesLocal > this.golesVisitante) {
            return `Ganó el equipo local por ${this.golesLocal} - ${this.golesVisitante}`;
        } else if (this.golesLocal < this.golesVisitante) {
            return `Ganó el equipo visitante por ${this.golesVisitante} - ${this.golesLocal}`;
        } else {
            return `Los equipos empataron ${this.golesLocal} - ${this.golesVisitante}`;
        }  
    }
}

