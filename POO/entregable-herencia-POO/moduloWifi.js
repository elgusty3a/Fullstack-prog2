"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;
var ModuloWifi = /** @class */ (function () {
    function ModuloWifi(pVelocidadMbps, pFrecuenciaGHz) {
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    ModuloWifi.prototype.conectarInternet = function () {
        console.log("Conexión establecida");
    };
    ModuloWifi.prototype.getVelocidad = function () {
        return this.velocidadMbps;
    };
    ModuloWifi.prototype.mostrarVelocidad = function () {
        console.log("La velocidad de conexi\u00F3n es ".concat(this.getVelocidad()));
    };
    ModuloWifi.prototype.setVelocidad = function (pVelocidadMbps) {
        this.velocidadMbps = pVelocidadMbps;
    };
    ModuloWifi.prototype.getFrecuencia = function () {
        return this.frecuenciaGHz;
    };
    ModuloWifi.prototype.setFrecuencia = function (pFrecuenciaGHz) {
        this.frecuenciaGHz = pFrecuenciaGHz;
    };
    ModuloWifi.prototype.mostrarInfo = function () {
        console.log("Velocidad de conexi\u00F3n: ".concat(this.getVelocidad(), "\nFrecuencia de conexi\u00F3n: ").concat(this.getFrecuencia(), "\n"));
    };
    return ModuloWifi;
}());
exports.ModuloWifi = ModuloWifi;
