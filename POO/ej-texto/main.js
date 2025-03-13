"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var texto = fs.readFileSync('abc.txt', 'utf8');
var palabras = texto.split(' ');
console.log(palabras);
