// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Musica1234',
    database: 'ejemplo'
});

conexion.connect((err) => {
    if (err) {
        console.error('Error en la conexión:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/autenticar', (req, res) => {
    const { correo, contra } = req.body;
    const sqlQuery = "SELECT * FROM ejemplo.usuario WHERE correo = ? AND contra = ?";

    const params = [correo, contra];

    conexion.query(sqlQuery, params, (err, rows) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            res.json({ autenticado: false });
        } else {
            console.log('Los datos solicitados son:', rows);
            res.json({ autenticado: rows.length > 0 });
        }
    });
});

app.post('/registro', (req, res) => {
    const { nombre, precio, categoria } = req.body;
    const sqlQuery = "INSERT INTO ejemplo.producto(nombre, precio, categoria) VALUES (?, ?, ?)";

    const params = [nombre, precio, categoria];

    conexion.query(sqlQuery, params, (err) => {
        if (err) {
            console.error('Error en la inserción del producto:', err);
            res.json({ insertado: false });
        } else {
            console.log('Producto agregado');
            res.json({ insertado: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
