import { Torneo } from "./models/Torneo";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Jugador } from "./models/Jugador";
import { Partido } from "./models/Partido";
import { Resultado } from "./models/Resultado";
import { Basquet } from "./models/Basquet";

const laLiga = new Torneo("1", "La liga Argentina")
const RiverBlate = new Equipo("River Plate")
const BocaJrs = new Equipo("Boca Jrs")

const jugadoresBoca = [
    new Jugador("1", "Zeballos", 33),
    new Jugador("2", "Langoni", 32),
    new Jugador("3", "Marco", 31),
    new Jugador("4", "Di Llolo", 32),
    new Jugador("5", "Merentiel", 19),
    new Jugador("6", "Paredes", 22),
    new Jugador("7", "Pared", 22),
]

const jugadoresRiver = [
    new Jugador("1", "Borja", 33),
    new Jugador("2", "armani", 32),
    new Jugador("3", "lanzini", 31),
    new Jugador("4", "barco", 32),
    new Jugador("5", "mastan", 19),
    new Jugador("6", "montiel", 22)
]

jugadoresBoca.map(B => {
    BocaJrs.agregarJugador(B)
})
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)
jugadoresRiver.map(R => {
    RiverBlate.agregarJugador(R)
})

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)

laLiga.listarPartidos()
const futbol = new Futbol()
const resultado = new Resultado(0, 1)
const partido = new Partido("0", RiverBlate, BocaJrs, futbol, resultado)
laLiga.programarPartido(partido)

if (!futbol.validar(BocaJrs) || !futbol.validar(RiverBlate)) {
} else {
    console.log("Validación Boca en Futbol:", futbol.validar(BocaJrs));
    console.log("Validación River en Futbol:", futbol.validar(RiverBlate));
    partido.jugar();
    laLiga.listarPartidos()
    console.log(laLiga.buscarPartido("0"));
}

console.log("||||| PARTIDO DE BASQUET ||||||")
const lakers = new Equipo("Los Angeles devkers");
const bulls = new Equipo("Chicago cools");

const lebron = new Jugador("10", "lebron Marcelo", 38);
const davis = new Jugador("11", "Joao Emilio", 30);
const russell = new Jugador("12", "Lucianno Jovic", 27);
const reaves = new Jugador("13", "Sergio jhonson", 25);
const hachimura = new Jugador("14", "Juan james", 26);
const reddish = new Jugador("15", "trulimero", 25);

lakers.agregarJugador(lebron);
lakers.agregarJugador(davis);
lakers.agregarJugador(russell);
lakers.agregarJugador(reaves);
lakers.agregarJugador(hachimura);
lakers.agregarJugador(reddish)

const lavine = new Jugador("20", "tun tun", 29);
const derozan = new Jugador("21", "barilo", 34);
const vucevic = new Jugador("22", "tralalero", 33);
const cwhite = new Jugador("23", "barbijo", 24);
const pwilliams = new Jugador("24", "palermo", 22);

bulls.agregarJugador(lavine);
bulls.agregarJugador(derozan);
bulls.agregarJugador(vucevic);
bulls.agregarJugador(cwhite);
bulls.agregarJugador(pwilliams);
const basquet = new Basquet();
const resultBasquet = new Resultado(110, 105);
const partidoBasquet = new Partido("1", lakers, bulls, basquet, resultBasquet);
laLiga.programarPartido(partidoBasquet);

if (!basquet.validar(lakers) || !basquet.validar(bulls)) {
    partidoBasquet.jugar();
} else {
    console.log("Validación Lakers en Básquet:", basquet.validar(lakers));
    console.log("Validación Bulls en Básquet:", basquet.validar(bulls));
    laLiga.listarPartidos()
}