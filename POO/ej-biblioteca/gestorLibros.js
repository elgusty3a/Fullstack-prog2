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
        if (indice === undefined) {
            indice = -1;
        }
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
    GestorLibros.prototype.modificar = function (pIndice) {
        this.menuModificar(pIndice);
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
    GestorLibros.prototype.eliminar = function (pIndice) {
        this.libros.splice(pIndice, 1);
        // }
    };
    GestorLibros.prototype.menuGestor = function () {
        var opcion;
        var indice;
        do {
            opcion = rdl.questionInt("Bienvenidos a Biblioteca ".concat(this.getNombre(), "\nElija una opcion:\n\n        1 - Buscar Libro\n\n        2 - Crear Libro\n\n        3 - Modificar Libro\n\n        4 - Eliminar Libro\n\n        5 - Imprimir lista de libros\n\n        0 - Terminar programa\n"));
            switch (opcion) {
                case 1:
                    indice = this.buscarLibro(rdl.question("Ingrese el titulo a buscar\n"));
                    if (indice >= 0) {
                        this.imprimirLibro(indice);
                    }
                    else {
                        console.log("El libro no exite\n");
                    }
                    break;
                case 2:
                    this.crearLibro();
                    this.imprimirListaLibros();
                    break;
                case 3:
                    indice = this.buscarLibro(rdl.question("Ingrese el titulo a buscar\n"));
                    if (indice >= 0) {
                        this.imprimirLibro(indice);
                        var respuesta = rdl.question("Si este es el libro a modificar ingrese Y");
                        if (respuesta.toUpperCase() == "Y") {
                            this.modificar(indice);
                        }
                    }
                    else {
                        console.log("El libro no exite\n");
                    }
                    break;
                case 4:
                    indice = this.buscarLibro(rdl.question("Ingrese el titulo a eliminar\n"));
                    if (indice >= 0) {
                        this.imprimirLibro(indice);
                        var respuesta = rdl.question("Si este es el libro a eliminar ingrese Y");
                        if (respuesta.toUpperCase() == "Y") {
                            this.eliminar(indice);
                        }
                    }
                    else {
                        console.log("El libro no exite\n");
                    }
                    break;
                case 5:
                    this.imprimirListaLibros();
                    break;
                case 0:
                    console.log("Fin\n----------");
                    break;
                default:
                    console.log("La opcion no es válida\n");
                    break;
            }
        } while (opcion != 0);
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
