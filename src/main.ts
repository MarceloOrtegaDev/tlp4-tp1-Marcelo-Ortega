import { Torneo } from "./models/Torneo";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Deporte } from "./models/Deporte";
import { Jugador } from "./models/Jugador";





const laLiga = new Torneo(1, "La liga Argentina")
const bocaJrs = new Equipo("Boca jrs")
const riverPlate = new Equipo("River Plate")

const primer_equipo = new Futbol(bocaJrs)
const segundo_equipo = new Futbol(riverPlate)

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

    riverPlate.agregarJugador(borja)
    riverPlate.agregarJugador(armani)
    riverPlate.agregarJugador(lanzini)
    riverPlate.agregarJugador(barco)
    riverPlate.agregarJugador(mastan)
    riverPlate.agregarJugador(montiel)


bocaJrs.agregarJugador(chango)
bocaJrs.agregarJugador(langoni)
bocaJrs.agregarJugador(pelegrino)
bocaJrs.agregarJugador(diLOLO)
bocaJrs.agregarJugador(merentiel)
bocaJrs.agregarJugador(paredes)

laLiga.listarPartidos









