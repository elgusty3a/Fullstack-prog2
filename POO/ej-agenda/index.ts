import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';
// import { Socio } from "./socio";
import { Agenda } from "./agenda";
import { Contacto } from "./contacto";

let personal = new Agenda("Personal");
let cintia = new Contacto("Cintia","D'Ferrari",2983546444,"lamadrid 471");
let mama = new Contacto("Marisa","Villanueva",2983418834,"tierra del fuego 946");
let tia = new Contacto("edith","arias",2983547856,"buchardo 896");
let primo = new Contacto("matias","cuervo",2914597255,"zelarrayan 459");
let mia = new Contacto("mia","zurita",2983415526,"maipu 34");
let listaContactosBackUp:Contacto[] = [cintia,mama,tia,primo,mia];
personal.insertarContactos(listaContactosBackUp);
personal.menuAgenda();

