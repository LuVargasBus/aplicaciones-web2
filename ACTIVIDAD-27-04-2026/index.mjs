import express from 'express';

const PORT = 5001;

const app = express();

const middleware1 = (req, res, next) => {
    console.log('Middleware 1 ejecutado');
    if(true){
        console.log('Middleware 1: condición cumplida');
    } else {
    next(); 
    }
}

app.use(express.static('front'));

app.use(middleware1);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.statusCode = 200;
    res.send('<h1>¡HELLO FROM EXPRESS!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server listening on  ${PORT}`);
}
);

// app.post('/', middleware1, (req, res) => {
//     res.send('POST request received');
//     console.log('POST request received');
// });

//actividad hacer una ruta con el verbo get en otra ruta diferente a '/' y que responda con un mensaje diferente al de la ruta '/'.
app.get('/saludo', (req, res) => {
    res.send('hello from /saludo');
    console.log('GET request received on /saludo');
});

//simulado desde thunder client POST a  http://192.169.0.50:5122/Saludo 


