import express from 'express';
import ObtenerProductos from './function.mjs';

const PORT = 5001;

const app = express();

app.get('/api/v1/productos', ObtenerProductos);

app.get('/api/v1/productos/:id', (req, res) => {
    res.json({ message: `GET request received on /api/v1/productos/${req.params.id}` });
    console.log(`GET request received on /api/v1/productos/${req.params.id}`);
});

// app.post('/api/v1/productos', (req, res) => {
//     res.send('POST request received on /api/v1/productos');
//     console.log('POST request received on /api/v1/productos');
// });

// app.put('/api/v1/productos/:id', (req, res) => {
//     res.send(`PUT request received on /api/v1/productos/${req.params.id}`);
//     console.log(`PUT request received on /api/v1/productos/${req.params.id}`);
// });

// app.delete('/api/v1/productos/:id', (req, res) => {
//     res.send(`DELETE request received on /api/v1/productos/${req.params.id}`);
//     console.log(`DELETE request received on /api/v1/productos/${req.params.id}`);
// });

app.listen(PORT, () => {
    console.log(`Server listening on  ${PORT}`);
});
