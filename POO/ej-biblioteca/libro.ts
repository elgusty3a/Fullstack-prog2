export class Libro {

  private titulo:string;
  private autor:string;
  private genero:string;
  private editorial:string;
  private disponibilidad:boolean;

  constructor(pTitulo:string,pAutor:string,pGenero:string,pEditorial:string,pDisponibilidad:boolean) {
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.genero = pGenero;
    this.editorial = pEditorial;
    this.disponibilidad = pDisponibilidad;
  }

  public getTitulo() {
    return this.titulo;
  }
  public setTitulo(pTitulo:string) {
    
  }
  public getAutor() {
    return this.autor;
  }
  public setAutor(pAutor:string) {
    
  }
  public getGenero() {
    return this.genero;
  }
  public setGenero(pGenero:string) {
    
  }
  public getEditorial() {
    return this.editorial;
  }
  public setEditorial(pEditorial:string) {
    
  }
  public estaDisponible() {
    return this.disponibilidad;
  }
  public setDisponibilidad(pDisponibilidad:boolean) {
    
  }

}