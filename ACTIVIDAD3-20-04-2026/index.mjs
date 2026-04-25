import http from 'node:http';
import { handleUsers, handleFilteredUsers } from './src/routes/users.mjs';

const server = http.createServer((req, res) => {
  try {
    if (req.method === 'GET') {

      const url = new URL(req.url, `http://${req.headers.host}`);
      const pathname = url.pathname;

      if (pathname === '/') {
        res.statusCode = 200;
        return res.end('Estas en la ruta raiz!');
      }

      if (pathname === '/usuarios') {
        return handleUsers(req, res);
      }

      if (pathname === '/usuarios/filtrados') {
        return handleFilteredUsers(req, res);
      }
    }

    res.statusCode = 404;
    res.end('Recurso no encontrado ');

  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("error");
  }
});

server.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});