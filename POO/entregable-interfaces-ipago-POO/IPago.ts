export interface IPago {
  procesarPago(): void;
  cancelarPago(): void;
  generarRecibo(): void;
}

