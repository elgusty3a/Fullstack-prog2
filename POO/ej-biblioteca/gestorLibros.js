"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibros = void 0;
var libro_1 = require("./libro");
var rdl = require("readline-sync");
var GestorLibros = /** @class */ (function () {
    // private socios:Socio[];
    function GestorLibros(pNombre) {
        this.nombre = pNombre;
        this.libros = new Array();
        // this.socios = new Array();
    }
    GestorLibros.prototype.crearLibro = function () {
        var titulo = rdl.question("Ingrese el titulo del libro\n");
        var autor = rdl.question("Ingrese el autor del Libro\n");
        var genero = rdl.question("Especifique el genero del libro\n");
        var editorial = rdl.question("Indique la editorial\n");
        var nuevoLibro = new libro_1.Libro(titulo.toUpperCase(), autor.toUpperCase(), genero.toUpperCase(), editorial.toUpperCase());
        this.insertarLibro(nuevoLibro);
    };
    GestorLibros.prototype.getNombre = function () {
        return this.nombre;
    };
    GestorLibros.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    GestorLibros.prototype.insertarLibro = function (pLibro) {
        this.libros.push(pLibro);
    };
    GestorLibros.prototype.insertarLibros = function (pLibro) {
        var _this = this;
        pLibro.forEach(function (libro) {
            _this.insertarLibro(libro);
        });
    };
    GestorLibros.prototype.buscarLibro = function (pTitulo) {
        var indice = this.libros.findIndex(function (libro) { return libro.getTitulo().toUpperCase().includes(pTitulo.toUpperCase()); });
        return indice;
    };
    GestorLibros.prototype.imprimirLibro = function (pIndice) {
        console.log(this.libros[pIndice]);
    };
    GestorLibros.prototype.imprimirListaLibros = function () {
        this.libros.forEach(function (libro) {
            console.log(libro);
        });
    };
    GestorLibros.prototype.modificar = function (pTitulo) {
        if (this.buscarLibro(pTitulo) != undefined) {
            var indice = this.buscarLibro(pTitulo);
            this.menuModificar(indice);
        }
        else {
            console.log("El libro no exite");
        }
    };
    GestorLibros.prototype.menuModificar = function (pIndice) {
        var opcion = rdl.questionInt("Indique que atributo del libro desea modificar:\n\n      1 - Titulo\n\n      2 - Autor\n\n      3 - Genero\n\n      4 - Editorial\n");
        switch (opcion) {
            case 1:
                this.libros[pIndice].setTitulo(rdl.question("Ingrese el nuevo titulo\n"));
                break;
            case 2:
                this.libros[pIndice].setAutor(rdl.question("Ingrese el nuevo autor\n"));
                break;
            case 3:
                this.libros[pIndice].setGenero(rdl.question("Ingrese el nuevo genero\n"));
                break;
            case 4:
                this.libros[pIndice].setEditorial(rdl.question("Ingrese la nueva editorial\n"));
                break;
            default:
                console.log("La opcion no es válida\n");
                break;
        }
    };
    GestorLibros.prototype.eliminar = function (pTitulo) {
        if (this.buscarLibro(pTitulo) != undefined) {
            this.libros.splice(this.buscarLibro(pTitulo), 1);
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
