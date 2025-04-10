import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';
// import { Socio } from "./socio";
import { Agenda } from "./agenda";
import { Contacto } from "./contacto";

let personal = new Agenda("Personal");
let cintia = new Contacto("Cintia","D'Ferrari",2983546426,"lamadrid 471");
let mama = new Contacto("Marisa","Villanueva",2983546426,"tierra del fuego 946");
let tia = new Contacto("edith","arias",2983546426,"buchardo");
let primo = new Contacto("matias","cuervo",2983546426,"Americana");
let mia = new Contacto("Un tal lucas","Julio Cortazar",2983546426,"Clarin");
let listaContactosBackUp:Contacto[] = [cintia,mama,tia,primo];
personal.insertarLibros(listaContactosBackUp);
personal.menuAgenda();

