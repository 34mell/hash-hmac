// emisor.js
// Simula un emisor que genera un mensaje con HMAC y lo guarda en un archivo

const crypto = require('crypto');
const fs = require('fs');

// Mensaje a enviar
const mensajeOriginal = "Hola, este es un mensaje secreto";

// Clave secreta compartida (simulada)
const claveSecreta = "clave_super_secreta_123";

// Generar HMAC SHA-256 del mensaje
const hmac = crypto.createHmac('sha256', claveSecreta)
                   .update(mensajeOriginal)
                   .digest('hex');

// Mostrar datos por consola
console.log("== EMISOR ==");
console.log("Mensaje original:", mensajeOriginal);
console.log("HMAC generado:", hmac);

// Guardar mensaje y HMAC en un archivo JSON
const datos = {
  mensaje: mensajeOriginal,
  hmac: hmac
};

fs.writeFileSync('mensaje.json', JSON.stringify(datos, null, 2));
console.log("Archivo 'mensaje.json' generado con éxito.");
