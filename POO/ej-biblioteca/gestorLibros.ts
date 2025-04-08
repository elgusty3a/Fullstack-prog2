import { Libro } from "./libro";
import { Socio } from "./socio";
import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';

export class GestorLibros {

  private nombre:string;
  private libros:Libro[];
  private socios:Socio[];

  constructor(pNombre:string) {
    this.nombre = pNombre;
    this.libros = new Array();
    this.socios = new Array();
  }

  public crearLibro():Libro{

  }

  public insertarLibro(pLibro:Libro){
    this.libros.push(pLibro);
  }

  public insertarLibros(pLibro:Libro[]){
    pLibro.forEach(libro => {
      this.insertarLibro(libro);
    });
  }

  public existeLibro(pTitulo:string):number{
    let indice:number = this.libros.findIndex(libro => libro.getTitulo() == pTitulo);
    return indice;
  }

  public imprimirLibro(pIndice:number){
    console.log(this.libros[pIndice]);
  }

  public modificar(pTitulo:string){
    if (this.existeLibro(pTitulo)!=undefined) {
      let indice:number=this.existeLibro(pTitulo);
      this.menuModificar(indice);
    }
  }

  private menuModificar(pIndice:number){
    
  }

  public eliminar(){

  }




}