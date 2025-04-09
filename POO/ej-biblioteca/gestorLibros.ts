import { Libro } from "./libro";
// import { Socio } from "./socio";
import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';

export class GestorLibros {

  private nombre:string;
  private libros:Libro[];
  // private socios:Socio[];

  constructor(pNombre:string) {
    this.nombre = pNombre;
    this.libros = new Array();
    // this.socios = new Array();
  }

  public crearLibro(){
    let titulo:string = rdl.question(`Ingrese el titulo del libro\n`);
    let autor:string = rdl.question(`Ingrese el autor del Libro\n`);
    let genero:string = rdl.question(`Especifique el genero del libro\n`);
    let editorial:string = rdl.question(`Indique la editorial\n`);
    let nuevoLibro:Libro = new Libro(titulo.toUpperCase(),autor.toUpperCase(),genero.toUpperCase(),editorial.toUpperCase());
    this.insertarLibro(nuevoLibro);
  }

  public getNombre():string{
    return this.nombre;
  }

  public setNombre(pNombre:string){
    this.nombre = pNombre;
  }

  public insertarLibro(pLibro:Libro){
    this.libros.push(pLibro);
  }

  public insertarLibros(pLibro:Libro[]){
    pLibro.forEach(libro => {
      this.insertarLibro(libro);
    });
  }

  public buscarLibro(pTitulo:string):number{
    let indice:number = this.libros.findIndex(libro => libro.getTitulo().toUpperCase().includes(pTitulo.toUpperCase()));
    return indice;
  }

  public imprimirLibro(pIndice:number){
    console.log(this.libros[pIndice]);
  }

  public imprimirListaLibros(){
    this.libros.forEach(libro => {
      console.log(libro);
    });
  }

  public modificar(pTitulo:string){
    if (this.buscarLibro(pTitulo)!=undefined) {
      let indice:number=this.buscarLibro(pTitulo);
      this.menuModificar(indice);
    }else{console.log("El libro no exite");}
  }

  private menuModificar(pIndice:number){
    let opcion:number = rdl.questionInt(`Indique que atributo del libro desea modificar:\n
      1 - Titulo\n
      2 - Autor\n
      3 - Genero\n
      4 - Editorial\n`)
    switch (opcion) {
      case 1:
        this.libros[pIndice].setTitulo(rdl.question(`Ingrese el nuevo titulo\n`))
        break;
      case 2:
        this.libros[pIndice].setAutor(rdl.question(`Ingrese el nuevo autor\n`))
        break;
      case 3:
        this.libros[pIndice].setGenero(rdl.question(`Ingrese el nuevo genero\n`))
        break;
      case 4:
        this.libros[pIndice].setEditorial(rdl.question(`Ingrese la nueva editorial\n`))
        break;
      default: console.log("La opcion no es válida\n");
        break;
    }
  }

  public eliminar(pTitulo:string){
    if (this.buscarLibro(pTitulo)!=undefined) {
      this.libros.splice(this.buscarLibro(pTitulo),1);
    }
  }




}