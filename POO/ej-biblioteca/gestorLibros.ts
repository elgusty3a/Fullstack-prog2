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
    if (indice===undefined) {
      indice = -1;
    }
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

  public modificar(pIndice:number){
      this.menuModificar(pIndice);
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

  public eliminar(pIndice:number){
      this.libros.splice(pIndice,1);
    // }
  }

  public menuGestor(){
    let opcion:number;
    let indice:number;
    do {
      opcion = rdl.questionInt(`Bienvenidos a Biblioteca ${this.getNombre()}\nElija una opcion:\n
        1 - Buscar Libro\n
        2 - Crear Libro\n
        3 - Modificar Libro\n
        4 - Eliminar Libro\n
        5 - Imprimir lista de libros\n
        0 - Terminar programa\n`)
      switch (opcion) {
        case 1:
          indice = this.buscarLibro(rdl.question(`Ingrese el titulo a buscar\n`));
          if(indice >= 0){
            this.imprimirLibro(indice);
          }else{console.log("El libro no exite\n");}
          break;
          case 2:
            this.crearLibro();
            this.imprimirListaLibros();
            break;
          case 3:
            indice = this.buscarLibro(rdl.question(`Ingrese el titulo a buscar\n`));
            if(indice >= 0){
              this.imprimirLibro(indice);
              let respuesta:string = rdl.question("Si este es el libro a modificar ingrese Y");
              if (respuesta.toUpperCase() == "Y") {
                this.modificar(indice);
              }
            }else{console.log("El libro no exite\n");}
          break;
        case 4:
          indice = this.buscarLibro(rdl.question(`Ingrese el titulo a eliminar\n`));
          if(indice >= 0){
            this.imprimirLibro(indice);
            let respuesta:string = rdl.question("Si este es el libro a eliminar ingrese Y");
            if (respuesta.toUpperCase() == "Y") {
              this.eliminar(indice);
            }
          }else{console.log("El libro no exite\n");}
          break;
        case 5:
          this.imprimirListaLibros();
          break;
        case 0:
          console.log("Fin\n----------");
          break;
        default: console.log("La opcion no es válida\n");break;
      }
    }while (opcion != 0);
  }

}