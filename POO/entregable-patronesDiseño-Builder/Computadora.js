"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
var Computadora = /** @class */ (function () {
    function Computadora(pProcesador, pRam, pAlmacenamiento, pTarjetaGrafica, pSistemaOperativo) {
        this.procesador = pProcesador;
        this.ram = pRam;
        this.almacenamiento = pAlmacenamiento;
        this.tarjetaGráfica = pTarjetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;
    }
    Computadora.prototype.tieneGrafica = function () {
        if (this.tarjetaGráfica == true) {
            return "Si";
        }
        else {
            return "No";
        }
    };
    Computadora.prototype.toString = function () {
        return ("Datos de la PC:\n\tProcesador: ".concat(this.procesador, "\n\tRAM: ").concat(this.ram, "\n\tAlmacenamiento: ").concat(this.almacenamiento, "\n\tTarjeta Grafica: ").concat(this.tieneGrafica(), "\n\tSistema Operativo: ").concat(this.sistemaOperativo));
    };
    return Computadora;
}());
exports.Computadora = Computadora;
