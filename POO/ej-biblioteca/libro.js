"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(pTitulo, pAutor, pGenero, pEditorial) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.genero = pGenero;
        this.editorial = pEditorial;
        this.disponibilidad = true;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (pTitulo) {
        this.titulo = pTitulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (pGenero) {
        this.genero = pGenero;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (pEditorial) {
        this.editorial = pEditorial;
    };
    Libro.prototype.estaDisponible = function () {
        return this.disponibilidad;
    };
    Libro.prototype.setDisponibilidad = function (pDisponibilidad) {
        this.disponibilidad = pDisponibilidad;
    };
    return Libro;
}());
exports.Libro = Libro;
