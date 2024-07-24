const fs = require('fs');  

fs.copyFileSync("nuevo_archivo.txt", "nuevo_archivo_copia.txt");
console.log("Archivo copiado!");