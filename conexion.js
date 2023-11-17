function conectarMySQL() {
    var usuario = document.getElementById("email").value
    var contra = document.getElementById("password").value
    const mysql = require('mysql')
    const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Musica1234',
        database: 'ejemplo'
    })

    conexion.connect((err) => {
        if (err) throw err
        console.log('Conexion establecida')
    })

    conexion.query("SELECT * FROM tabla WHERE user='" + usuario + "' AND contra='" + contra + "'", (err, rows) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            alert('Autenticación fallida. Verifica tus credenciales.');
        } else {
            console.log('Los datos solicitados son:', rows);
            
            window.location.href = 'producto.html';
        }

        conexion.end();
    })
}

function registro(){
    var usuario = document.getElementById("email").value
    var contra = document.getElementById("password").value
    const mysql = require('mysql')
    const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Musica1234',
        database: 'ejemplo'
    })

    conexion.connect((err) => {
        if (err) throw err
        console.log('Conexion establecida')
    })

    conexion.query("INSERT INTO producto ='" + usuario + "' AND contra='" + contra + "'", (err, rows) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            alert('El producto no se pudo añadir.');
        } else {
            alert('Producto añadido.');
        }

        conexion.end();
    })
}