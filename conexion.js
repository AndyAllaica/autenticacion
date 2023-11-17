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
            // Mostrar mensaje de autenticación fallida
            alert('Autenticación fallida. Verifica tus credenciales.');
        } else {
            console.log('Los datos solicitados son:', rows);
            // Redirigir a otra página en caso de éxito
            window.location.href = 'otra_pagina.html';
        }

        conexion.end();
    })
}

function registro(){

}