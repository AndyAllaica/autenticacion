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

    const sqlQuery = "SELECT * FROM usuario WHERE correo = ? AND contra = ?";

    const params = [usuario, contra];

    conexion.query(sqlQuery, params, (err, rows) => {
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
    var nom = document.getElementById("productName").value
    var pre = document.getElementById("productPrice").value
    var cat = document.getElementById("productCat").value
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

    const sqlQuery = "INSERT INTO producto (nombre,precio,categoria) VALUES(?,?,?)";

    const params = [nom, pre, cat];

    conexion.query(sqlQuery, params, (err) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            alert('No se pudo agregar el producto.');
        } else {
            alert('Producto agregado.');
        }

        conexion.end();
    })

}