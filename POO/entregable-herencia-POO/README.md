# Ejercicio practico
## Objetivo: Aplicar herencia entre clases de electrodomésticos y composición usando módulos inteligentes.

### Parte 1 - Herencia
Crear una clase Electrodomestico con atributos:
 - marca (string)
 - modelo (string)
 - estaEncendido (boolean)

 Métodos:
 - encender()
 - apagar()
 - mostrarInfo()

Crear una clase Heladera que herede de Electrodomestico, agregue:
 - temperatura (number)
 - método cambiarTemperatura(nuevaTemp: number)

Crear una clase SmartHeladera que herede de Heladera y le sume:
 - una composición con una clase ModuloWifi

### Parte 2 - Composición
Crear clase ModuloWifi con atributos:
 - velocidadMbps (number)
 - frecuenciaGHz (number) Métodos getter y setter.

En SmartHeladera, agregar un atributo:
 - moduloWifi

Usar moduloWifi para:
 - simular una conexión online con el metodo: conectarInternet()
 - Mostrar la velocidad de conexión

### Parte 3 - Prueba
Crear una instancia de SmartHeladera, encenderla, cambiar temperatura, conectarse a internet y mostrar info.