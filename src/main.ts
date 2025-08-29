import { Torneo } from "./models/Torneo";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Jugador } from "./models/Jugador";
import { Partido } from "./models/Partido";
import { Resultado } from "./models/Resultado";





const laLiga = new Torneo("1", "La liga Argentina")
const localBoca = new Equipo("River Plate")
const visitanteRiver = new Equipo("Boca jrs")

const borja = new Jugador("1", "Borja", 33)
const armani = new Jugador("2", "armani", 32)
const lanzini = new Jugador("3", "lanzini", 31)
const barco = new Jugador("4", "barco", 32)
const mastan = new Jugador("5", "mastan", 19)
const montiel = new Jugador("6", "montiel", 22)

const chango = new Jugador("1", "Borja", 33)
const langoni = new Jugador("2", "armani", 32)
const pelegrino = new Jugador("3", "lanzini", 31)
const diLOLO = new Jugador("4", "barco", 32)
const merentiel = new Jugador("5", "mastan", 19)
const paredes = new Jugador("6", "montiel", 22)

localBoca.agregarJugador(borja)
localBoca.agregarJugador(armani)
localBoca.agregarJugador(lanzini)
localBoca.agregarJugador(barco)
localBoca.agregarJugador(mastan)
localBoca.agregarJugador(montiel)


visitanteRiver.agregarJugador(chango)
visitanteRiver.agregarJugador(langoni)
visitanteRiver.agregarJugador(pelegrino)
visitanteRiver.agregarJugador(diLOLO)
visitanteRiver.agregarJugador(merentiel)
visitanteRiver.agregarJugador(paredes)

laLiga.listarPartidos()
const futbol = new Futbol()
const result = new Resultado(4, 5)

const partido = new Partido("0", localBoca, visitanteRiver, futbol, result)

laLiga.programarPartido(partido)

console.log(laLiga.buscarPartido("0"));

laLiga.listarPartidos()

partido.jugar()
partido.resultado














