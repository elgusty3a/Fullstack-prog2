export class Libro {

  private titulo:string;
  private autor:string;
  private genero:string;
  private editorial:string;
  private disponibilidad:boolean;

  constructor(pTitulo:string,pAutor:string,pGenero:string,pEditorial:string) {
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.genero = pGenero;
    this.editorial = pEditorial;
    this.disponibilidad = true;
  }

  public getTitulo() {
    return this.titulo;
  }
  public setTitulo(pTitulo:string) {
    this.titulo = pTitulo;
  }
  public getAutor() {
    return this.autor;
  }
  public setAutor(pAutor:string) {
    this.autor = pAutor;
  }
  public getGenero() {
    return this.genero;
  }
  public setGenero(pGenero:string) {
    this.genero = pGenero;
  }
  public getEditorial() {
    return this.editorial;
  }
  public setEditorial(pEditorial:string) {
    this.editorial = pEditorial;
  }
  public estaDisponible() {
    return this.disponibilidad;
  }
  public setDisponibilidad(pDisponibilidad:boolean) {
    this.disponibilidad = pDisponibilidad;
  }

}