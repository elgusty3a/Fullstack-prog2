"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pSistem, pRam, pAlmacenamiento, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistem;
        this.memoriaRam = pRam !== null && pRam !== void 0 ? pRam : 4;
        this.almacenamientoInterno = pAlmacenamiento !== null && pAlmacenamiento !== void 0 ? pAlmacenamiento : 64;
        this.estadoEncendido = pEncendido !== null && pEncendido !== void 0 ? pEncendido : false;
    }
    Celular.prototype.getMarca = function () {
        return this.marca;
    };
    Celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Celular.prototype.getModelo = function () {
        return this.modelo;
    };
    Celular.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Celular.prototype.getSistem = function () {
        return this.sistemaOperativo;
    };
    Celular.prototype.setSistem = function (pSistem) {
        this.sistemaOperativo = pSistem;
    };
    Celular.prototype.getMemoriaRam = function () {
        return this.memoriaRam;
    };
    Celular.prototype.setMemoriaRam = function (pRam) {
        this.memoriaRam = pRam;
    };
    Celular.prototype.getAlmacenamiento = function () {
        return this.memoriaRam;
    };
    Celular.prototype.setAlmacenamiento = function (pAlmacenamiento) {
        this.almacenamientoInterno = pAlmacenamiento;
    };
    Celular.prototype.getEstado = function () {
        return this.estadoEncendido;
    };
    Celular.prototype.encenderApagar = function (pEstado) {
        if (pEstado == true && this.estadoEncendido == false) {
            this.estadoEncendido = true;
        }
        else if (pEstado != true && this.estadoEncendido == true) {
            this.estadoEncendido = false;
        }
    };
    Celular.prototype.mostrarInfo = function () {
        console.log("\n                Marca: ".concat(this.marca, "\n                Modelo: ").concat(this.modelo, "\n                Sistema Operativo: ").concat(this.sistemaOperativo, "\n                Memoria RAM: ").concat(this.memoriaRam, "\n                Almacenamiento interno: ").concat(this.almacenamientoInterno, "\n                Estado: ").concat(this.estadoEncendido, "\n                "));
    };
    return Celular;
}());
exports.Celular = Celular;
