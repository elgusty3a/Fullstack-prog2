import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';
import { Socio } from "./socio";
import { GestorLibros } from "./gestorLibros";
import { Libro } from "./libro";

let sarmiento = new GestorLibros("Sarmiento");