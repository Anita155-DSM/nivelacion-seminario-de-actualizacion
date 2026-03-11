import http from "http";
import fs from "fs";
import path from "path";

const servidor = http.createServer((req, res) => {

    let rutaArchivo = "./implementacion2/index.html";

    if (req.url === "/script.js") {
        rutaArchivo = "./implementacion2/script.js";
    }

    fs.readFile(rutaArchivo, (err, data) => {

        if (err) {
            res.writeHead(404);
            res.end("Archivo no encontrado");
            return;
        }

        if (rutaArchivo.endsWith(".js")) {
            res.writeHead(200, { "Content-Type": "text/javascript" });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
        }

        res.end(data);

    });

});

servidor.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});