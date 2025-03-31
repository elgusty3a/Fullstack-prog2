## EJERCICIO ENTREGABLE OBLIGATORIO Programacion - clase 3

# Requisitos:
  - Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
    - Los profesores deben tener un listado de sus alumnos.

    - Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
    - La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.


### Integrantes:
  - Veronica Martin
  - Juan Bayugar
  - Gustavo Arias

## Instrucciones:
 - Para crear la Escuela se utiliza:

    A modo de ejemplo:
      - let cresta = new Escuela("Cresta");

  De manera similar ocurre con Maestros y Alumnos, con diferentes parametros dependiendo de la clase.

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
