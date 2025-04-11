import { Contacto } from "./contacto";
import { readlinkSync } from "fs";
import * as rdl from 'readline-sync';

export class Agenda {

  private nombre:string;
  private contactos:Contacto[];
  

  constructor(pNombre:string) {
    this.nombre = pNombre;
    this.contactos = new Array();
  }

  public crearContacto(){
    let nombre:string = rdl.question(`Ingrese el numbre\n`);
    let apellido:string = rdl.question(`Ingrese el apellido\n`);
    let numeroTelefono:number = rdl.questionInt(`Especifique el numero de telefonoo\n`);
    let direccion:string = rdl.question(`Indique la direccion\n`);
    let nuevoContacto:Contacto = new Contacto(nombre.toUpperCase(),apellido.toUpperCase(),numeroTelefono,direccion.toUpperCase());
    this.insertarContacto(nuevoContacto);
  }

  public getNombre():string{
    return this.nombre;
  }

  public setNombre(pNombre:string){
    this.nombre = pNombre;
  }

  public insertarContacto(pContacto:Contacto){
    this.contactos.push(pContacto);
  }

  public insertarContactos(pContactos:Contacto[]){
    pContactos.forEach(contacto => {
      this.insertarContacto(contacto);
    });
  }

  public buscarContacto(pNombre:string,pApellido:string):number{
    let indice:number = this.contactos.findIndex(contacto => contacto.getNombre().toUpperCase().includes(pNombre.toUpperCase()) && contacto.getApellido().toUpperCase().includes(pApellido.toUpperCase()));
    if (indice===undefined) {
      indice = -1;
    }
    return indice;
  }

  public imprimirContacto(pIndice:number){
    console.log(this.contactos[pIndice]);
  }

  public imprimirListaContactos(){
    this.contactos.forEach(contacto => {
      console.log(contacto);
    });
  }

  public modificar(pIndice:number){
      this.menuModificar(pIndice);
  }

  private menuModificar(pIndice:number){
    let opcion:number = rdl.questionInt(`Indique que atributo del contacto desea modificar:\n
      1 - Nombre\n
      2 - Apellido\n
      3 - Numero de telefono\n
      4 - Direccion\n`)
    switch (opcion) {
      case 1:
        this.contactos[pIndice].setNombre(rdl.question(`Ingrese el nuevo nombre\n`))
        break;
      case 2:
        this.contactos[pIndice].setApellido(rdl.question(`Ingrese el nuevo apellido\n`))
        break;
      case 3:
        this.contactos[pIndice].setNumeroTelefono(rdl.questionInt(`Ingrese el nuevo numero de telefono\n`))
        break;
      case 4:
        this.contactos[pIndice].setDireccion(rdl.question(`Ingrese la nueva Direccion\n`))
        break;
      default: console.log("La opcion no es válida\n");
        break;
    }
  }

  public eliminar(pIndice:number){
      this.contactos.splice(pIndice,1);
    // }
  }

  public menuAgenda(){
    let opcion:number;
    let indice:number;
    do {
      opcion = rdl.questionInt(`Esta es tu agenda de contactos ${this.getNombre()}\nElija una opcion:\n
        1 - Buscar contacto\n
        2 - Crear contacto\n
        3 - Modificar contacto\n
        4 - Eliminar contacto\n
        5 - Imprimir lista de contactos\n
        0 - Terminar programa\n`)
      switch (opcion) {
        case 1:
          indice = this.buscarContacto(rdl.question(`Ingrese el nombre\n`),rdl.question(`Ingrese el apellido\n`));
          if(indice >= 0){
            this.imprimirContacto(indice);
          }else{console.log("La persona no esta agendada\n");}
          break;
          case 2:
            this.crearContacto();
            this.imprimirListaContactos();
            break;
          case 3:
            indice = this.buscarContacto(rdl.question(`Ingrese el nombre\n`),rdl.question(`Ingrese el apellido\n`));
            if(indice >= 0){
              this.imprimirContacto(indice);
              let respuesta:string = rdl.question("Si este es el contacto a modificar ingrese Y");
              if (respuesta.toUpperCase() == "Y") {
                this.modificar(indice);
              }
            }else{console.log("El contacto no exite\n");}
          break;
        case 4:
          indice = this.buscarContacto(rdl.question(`Ingrese el nombre\n`),rdl.question(`Ingrese el apellido\n`));
          if(indice >= 0){
            this.imprimirContacto(indice);
            let respuesta:string = rdl.question("Si este es el contacto a eliminar ingrese Y");
            if (respuesta.toUpperCase() == "Y") {
              this.eliminar(indice);
            }
          }else{console.log("El contacto no exite\n");}
          break;
        case 5:
          this.imprimirListaContactos();
          break;
        case 0:
          console.log("Fin\n----------");
          break;
        default: console.log("La opcion no es válida\n");break;
      }
    }while (opcion != 0);
  }

}