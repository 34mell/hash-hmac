
## Introducción 

El objetivo de esta práctica es simular un intercambio seguro de mensajes entre dos partes (emisor y receptor), utilizando una función criptográfica de tipo HMAC con SHA-256. Este mecanismo permite verificar la autenticidad e integridad del mensaje, asegurando que no haya sido alterado y que proviene de un emisor legítimo que conoce una clave secreta compartida.

### Herramientas utilizadas
Lenguaje: JavaScript (Node.js)
Librerías: crypto (incluida en Node.js), fs para manejo de archivos
Entorno de ejecución: Node.js en consola
Formato de intercambio: Archivos locales .json

## Funcionamiento del sistema

- Emisor:
- Redacta un mensaje original (por ejemplo: "Hola, este es un mensaje secreto").
- Genera un HMAC-SHA-256 a partir del mensaje y una clave secreta compartida.
- Guarda el mensaje y su HMAC en un archivo JSON (mensaje.json), simulando el envío del mensaje.

- Receptor:
- Lee el archivo mensaje.json recibido.
- Extrae el mensaje y el HMAC generado por el emisor.
- Calcula nuevamente el HMAC localmente usando la misma clave secreta.

- Compara ambos HMAC:
- Si coinciden, el mensaje es auténtico y no ha sido alterado.
- Si no coinciden, se concluye que el mensaje fue modificado o la clave es incorrecta.