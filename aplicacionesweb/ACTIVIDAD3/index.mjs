import http from 'node:http'
import { handleUserData } from './src/routes/usuarios.mjs';

const server = http.createServer((req, res) => {

    try {
        if (req.method === 'GET') {
        if (req.url === '/') {
            res.statusCode = 200
            return res.end('Estas en la ruta raiz!' + req.url)
        }
        if (req.url === '/usuarios') {
            return handleUserData(req, res);
        }
        if (req.url === '/usuarios/filtrados') {
            return handleUserData(req, res);
        }
    }
    res.statusCode = 400
    res.end('Ruta no encontrada' + req.url)
      } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error interno");
  }
})

server.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001')
})

