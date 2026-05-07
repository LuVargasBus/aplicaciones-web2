import productos from './products.mjs';

function ObtenerProductos(req, res) {

    console.log('GET request received on /api/v1/productos');

    res.json(productos);

}

export default ObtenerProductos;