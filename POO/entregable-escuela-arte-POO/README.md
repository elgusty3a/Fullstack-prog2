# Ejercicio entregable – Entrega 21/04
---
## Enunciado:

Una prestigiosa escuela de arte necesita un sistema para organizar a las personas que forman parte de su comunidad: tanto quienes enseñan como quienes aprenden. Además, la escuela ofrece distintos cursos y necesita poder gestionar quién dicta cada uno y quiénes participan.
Tu objetivo es modelar este sistema utilizando Programación Orientada a Objetos en TypeScript. Identifica qué entidades intervienen en el sistema, qué características comparten y en qué se diferencian. Piensa qué relaciones podrían tener entre sí y cómo representarías esas conexiones de forma que, si una entidad se elimina, las demás sigan funcionando correctamente.
También es importante que el sistema pueda recorrer una lista de personas del club y, al invocar un mismo método, obtenga una presentación personalizada de cada una, según su rol.
Por último, asegúrate de que los cursos puedan tener un responsable y una lista de participantes, y que sea posible listar toda la información relevante de cada curso de forma ordenada.

### Integrante:

  - Gustavo Arias

## Planteamiento general
La concepción del ejercicio se pensó desde el punto de vista de una institucion educativa la cual debe administrar diferentes cursos, dictados por sus respectivos profesores y con sus correspondientes alumnos. La idea es que la institución tenga una lista de la totalidad de sus alumnos y profesores. Ademas cada curso debe conocer sus propios alumnos y su titular de cátedra. Sin embargo, la institución, puede dar de alta un curso sin un profesor asignado y de todas maneras tener alumnos a la espera de la contratación de uno.
## Instrucciones:
 - Para crear la Escuela se utiliza:

    A modo de ejemplo:
      - let cresta = new Escuela("Cresta");

  De manera similar ocurre con Cursos, Maestros y Alumnos, con diferentes parametros dependiendo de la clase.

 - Para dar de alta un alumno se hace desde el metodo de matriculacion de la institucion, puede ser en forma de arreglo o alumnos individuales.

    A modo de ejemplo:
      - cresta.marticularAlumno(arregloDeAlumnos);
      - cresta.marticularAlumno(juan);

  - Para contratar a un maestro se hace desde el metodo de contratarMaestro de la institucion, puede ser en forma de arreglo o maestros individuales.

    A modo de ejemplo:
      - cresta.marticularAlumno(arregloDeMaestros);
      - cresta.contratarMaestro(braian);

  - Para despedir a un Maestro o para expulsar un Alumno se realiza de forma individual con dos metodos similares dependiendo la Clase desde la propia institucion, es decir que ni un Maestro puede expulsar a un Alumno ni viceversa.

    A modo de ejemplo:
      - Para Maestros se utiliza cresta.despedirMaestro(braian)
      - Para Alumnos se utiliza cresta.expulsarAlumno(gus)
