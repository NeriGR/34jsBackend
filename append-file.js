const fs = require('fs');

fs.appendFileSync("nuevo_archivo.txt", "\nTenemos que agrer algo a este archivo, y es esto!", "utf8");
