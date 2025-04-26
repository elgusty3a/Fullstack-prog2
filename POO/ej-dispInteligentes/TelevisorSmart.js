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
exports.TelevisorSmart = void 0;
var DispositivoInteligente_1 = require("./DispositivoInteligente");
var TelevisorSmart = /** @class */ (function (_super) {
    __extends(TelevisorSmart, _super);
    function TelevisorSmart(pMarca, pModelo, pControl) {
        var _this = _super.call(this, pMarca, pModelo) || this;
        _this.controRemoto = pControl;
        return _this;
    }
    TelevisorSmart.prototype.funcionar = function () {
        this.controRemoto.encender();
        console.log("Reproduciendo imagen");
    };
    return TelevisorSmart;
}(DispositivoInteligente_1.DispositivoInteligente));
exports.TelevisorSmart = TelevisorSmart;
