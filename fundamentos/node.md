### ¿Qué es Node?
Javascript en el lado del servidor:
- Lenguaje de backend
- Acceso a sistema de archivos
- Información del sistema operativo
- Procesos en ejecución
- Corre sobre el motor V8 de Google(engine de javascript escrito en c++, usado por chrome, trabaja traduciendo Javascript al lenguaje de máquina de manera eficiente haciendo que node sea muy rápido)

### ¿Qué puedo hacer con Node?
- Uso de sockets para comunicación real cliente-servidor
- Manejo de archivos en FyleSystem, cargas simultáneas
- Servidores locales y remotos con información en tiempo real
- Conexiones a bases de datos
- Creación de servicios REST en segundos

### ¿Por qué es tan popular?
- Las entrdas y salidas no realizan bloqueos en el servidor
- Rápido y fácil de configurar
- Su manejador de paquetes (npm) es el ecosistema con más librerías del mundo
- Ed JavaScript

### Blocking vs No Blocking

### Event Loop
Los eventos en JavaScript y Node son enviados a una pila de procesos (call stack) y envia a la cola de callbacks FIFO pendientes de su ejecución
### Ciclo de vida de procesos en Node

### Async Await
- El Async convierte una funcion en una que retorna una promesa
- await de una función que retorne una promesa
- Permite trabajar con datos asincronicos
