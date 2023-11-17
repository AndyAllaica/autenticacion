function conectarMySQL() {
    const mysql = require('mysql')
    const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jonandres07',
        database: 'prueba'
    })

    conexion.connect((err) => {
        if (err) throw err
        console.log('Conexion establecida')
    })

    conexion.query('SELECT * FROM tabla WHERE idTabla=1 AND texto=\'Hola\'', (err, rows) => {
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