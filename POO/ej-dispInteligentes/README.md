# Sistema de Gestión de Dispositivos Inteligentes
Desarrollar un sistema orientado a objetos que simule el funcionamiento de una casa inteligente con
distintos dispositivos tecnológicos.
## Requisitos obligatorios
-   Interfaz IConectable : debe tener los métodos:
    - conectar(): void
    - desconectar(): void

Clase abstracta DispositivoInteligente: debe implementar la interfaz IConectable.
Debe tener:
- Un constructor con marca y modelo
- Un método concreto mostrarInfo()
- Un método abstracto funcionar()
#### Clases hijas
Crear al menos dos clases que hereden de DispositivoInteligente, por ejemplo:
  - AspiradoraRobot y LamparaInteligente

Cada clase debe implementar el método funcionar() con un comportamiento propio.

Crear una clase ControlRemoto con métodos:
encender()
apagar()

Incorporar esta clase dentro de una nueva subclase Televisor (usando composición).

Crear un arreglo de tipo DispositivoInteligente[] y guardar instancias de distintas subclases.

Recorrer ese arreglo y ejecutar:
conectar()
funcionar()
mostrarInfo()
desconectar()

Opcional: Agregar atributos propios de cada clase