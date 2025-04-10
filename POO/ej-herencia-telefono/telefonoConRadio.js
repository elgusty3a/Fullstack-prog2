"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefonoConRadio = void 0;
var telefono_1 = require("./telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(pMarca, pEstaPrendido, pBateriaActual, pFrecuenciaActual) {
        var _this = _super.call(this, pMarca, pEstaPrendido, pBateriaActual) || this;
        _this.frecuenciaActual = pFrecuenciaActual;
        return _this;
    }
    TelefonoConRadio.prototype.getFrecuecia = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.cambiarFrecuencia = function (pFrecuencia) {
        this.frecuenciaActual = pFrecuencia;
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        if (this.getEstaPrendido()) {
            console.log("Frecuencia: ".concat(this.getFrecuecia()));
        }
        else {
            console.log("El telefono esta apagado, no se puede ver la frecuencia");
        }
    };
    return TelefonoConRadio;
}(telefono_1.Telefono));
exports.TelefonoConRadio = TelefonoConRadio;
