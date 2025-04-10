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
exports.SmartHeladera = void 0;
var heladera_1 = require("./heladera");
var SmartHeladera = /** @class */ (function (_super) {
    __extends(SmartHeladera, _super);
    function SmartHeladera(pMarca, pModelo, pEstaEncendido, pTemperatura, pModulo) {
        var _this = _super.call(this, pMarca, pModelo, pEstaEncendido, pTemperatura) || this;
        _this.moduloWifi = pModulo;
        return _this;
    }
    SmartHeladera.prototype.conectarInternet = function () {
        this.moduloWifi.conectarInternet();
    };
    SmartHeladera.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        this.moduloWifi.mostrarInfo();
    };
    return SmartHeladera;
}(heladera_1.Heladera));
exports.SmartHeladera = SmartHeladera;
