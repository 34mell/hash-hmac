// receptor.js
// Simula un receptor que verifica la autenticidad del mensaje usando HMAC

const crypto = require('crypto');
const fs = require('fs');

// Clave secreta compartida (debe ser la misma que la del emisor)
const claveSecreta = "clave_super_secreta_123";

// Leer el archivo generado por el emisor
const contenido = fs.readFileSync('mensaje.json', 'utf-8');
const { mensaje, hmac: hmacRecibido } = JSON.parse(contenido);

// Calcular el HMAC localmente
const hmacCalculado = crypto.createHmac('sha256', claveSecreta)
                            .update(mensaje)
                            .digest('hex');

// Mostrar resultados
console.log("== RECEPTOR ==");
console.log("Mensaje recibido:", mensaje);
console.log("HMAC recibido:   ", hmacRecibido);
console.log("HMAC calculado:  ", hmacCalculado);

// Verificar si los HMAC coinciden
if (hmacRecibido === hmacCalculado) {
  console.log("✅ El mensaje es auténtico y no ha sido alterado.");
} else {
  console.log("❌ El mensaje ha sido modificado o la clave es incorrecta.");
}
