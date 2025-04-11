"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var contacto_1 = require("./contacto");
var rdl = require("readline-sync");
var Agenda = /** @class */ (function () {
    function Agenda(pNombre) {
        this.nombre = pNombre;
        this.contactos = new Array();
    }
    Agenda.prototype.crearContacto = function () {
        var nombre = rdl.question("Ingrese el numbre\n");
        var apellido = rdl.question("Ingrese el apellido\n");
        var numeroTelefono = rdl.questionInt("Especifique el numero de telefonoo\n");
        var direccion = rdl.question("Indique la direccion\n");
        var nuevoContacto = new contacto_1.Contacto(nombre.toUpperCase(), apellido.toUpperCase(), numeroTelefono, direccion.toUpperCase());
        this.insertarContacto(nuevoContacto);
    };
    Agenda.prototype.getNombre = function () {
        return this.nombre;
    };
    Agenda.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Agenda.prototype.insertarContacto = function (pContacto) {
        this.contactos.push(pContacto);
    };
    Agenda.prototype.insertarContactos = function (pContactos) {
        var _this = this;
        pContactos.forEach(function (contacto) {
            _this.insertarContacto(contacto);
        });
    };
    Agenda.prototype.buscarContacto = function (pNombre, pApellido) {
        var indice = this.contactos.findIndex(function (contacto) { return contacto.getNombre().toUpperCase().includes(pNombre.toUpperCase()) && contacto.getApellido().toUpperCase().includes(pApellido.toUpperCase()); });
        if (indice === undefined) {
            indice = -1;
        }
        return indice;
    };
    Agenda.prototype.imprimirContacto = function (pIndice) {
        console.log(this.contactos[pIndice]);
    };
    Agenda.prototype.imprimirListaContactos = function () {
        this.contactos.forEach(function (contacto) {
            console.log(contacto);
        });
    };
    Agenda.prototype.modificar = function (pIndice) {
        this.menuModificar(pIndice);
    };
    Agenda.prototype.menuModificar = function (pIndice) {
        var opcion = rdl.questionInt("Indique que atributo del contacto desea modificar:\n\n      1 - Nombre\n\n      2 - Apellido\n\n      3 - Numero de telefono\n\n      4 - Direccion\n");
        switch (opcion) {
            case 1:
                this.contactos[pIndice].setNombre(rdl.question("Ingrese el nuevo nombre\n"));
                break;
            case 2:
                this.contactos[pIndice].setApellido(rdl.question("Ingrese el nuevo apellido\n"));
                break;
            case 3:
                this.contactos[pIndice].setNumeroTelefono(rdl.questionInt("Ingrese el nuevo numero de telefono\n"));
                break;
            case 4:
                this.contactos[pIndice].setDireccion(rdl.question("Ingrese la nueva Direccion\n"));
                break;
            default:
                console.log("La opcion no es válida\n");
                break;
        }
    };
    Agenda.prototype.eliminar = function (pIndice) {
        this.contactos.splice(pIndice, 1);
        // }
    };
    Agenda.prototype.menuAgenda = function () {
        var opcion;
        var indice;
        do {
            opcion = rdl.questionInt("Esta es tu agenda de contactos ".concat(this.getNombre(), "\nElija una opcion:\n\n        1 - Buscar contacto\n\n        2 - Crear contacto\n\n        3 - Modificar contacto\n\n        4 - Eliminar contacto\n\n        5 - Imprimir lista de contactos\n\n        0 - Terminar programa\n"));
            switch (opcion) {
                case 1:
                    indice = this.buscarContacto(rdl.question("Ingrese el nombre\n"), rdl.question("Ingrese el apellido\n"));
                    if (indice >= 0) {
                        this.imprimirContacto(indice);
                    }
                    else {
                        console.log("La persona no esta agendada\n");
                    }
                    break;
                case 2:
                    this.crearContacto();
                    this.imprimirListaContactos();
                    break;
                case 3:
                    indice = this.buscarContacto(rdl.question("Ingrese el nombre\n"), rdl.question("Ingrese el apellido\n"));
                    if (indice >= 0) {
                        this.imprimirContacto(indice);
                        var respuesta = rdl.question("Si este es el contacto a modificar ingrese Y");
                        if (respuesta.toUpperCase() == "Y") {
                            this.modificar(indice);
                        }
                    }
                    else {
                        console.log("El contacto no exite\n");
                    }
                    break;
                case 4:
                    indice = this.buscarContacto(rdl.question("Ingrese el nombre\n"), rdl.question("Ingrese el apellido\n"));
                    if (indice >= 0) {
                        this.imprimirContacto(indice);
                        var respuesta = rdl.question("Si este es el contacto a eliminar ingrese Y");
                        if (respuesta.toUpperCase() == "Y") {
                            this.eliminar(indice);
                        }
                    }
                    else {
                        console.log("El contacto no exite\n");
                    }
                    break;
                case 5:
                    this.imprimirListaContactos();
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
    return Agenda;
}());
exports.Agenda = Agenda;
