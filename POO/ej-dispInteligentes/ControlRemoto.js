"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRemoto = void 0;
var ControlRemoto = /** @class */ (function () {
    function ControlRemoto(pModelo) {
        this.modelo = pModelo;
    }
    ControlRemoto.prototype.encender = function () {
        console.log("ON");
    };
    ControlRemoto.prototype.apagar = function () {
        console.log("OFF");
    };
    return ControlRemoto;
}());
exports.ControlRemoto = ControlRemoto;
