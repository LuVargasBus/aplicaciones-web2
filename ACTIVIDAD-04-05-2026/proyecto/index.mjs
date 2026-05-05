import express from 'express';

const PORT = 5001;

const app = express();
const validacionCodigo = async (req, res, next) => {
    try {
        
        const codigoRecibido = Number(req.params.codigo);
        const respuesta = await fetch('http://localhost:4321/usuario');
        const usuario = await respuesta.json();

        console.log('Usuario obtenido:', usuario);

        if (codigoRecibido === 5183) {
            console.log('Middleware: condición cumplida');
            return res.send('¡El código es correcto!');
        } else {
            console.log('Middleware: condición no cumplida');
            return res.status(403).send('Código incorrecto');
        }

    } catch (error) {
        console.error('Error en middleware:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

// Aplicación del middleware
app.use('/ruta/:codigo', validacionCodigo);

app.get('/:codigo', validacionCodigo, (req, res) => {
   req.params.codigo;
    res.status(200).JSON({ mensaje: '¡El código es correcto!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on  ${PORT}`);
}
);



