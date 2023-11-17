const mysql = require('mysql')
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Jonandres07',
    database:'oaaa'
})
//uwu buena noches
//aaaa
//jajajaja
conexion.connect((err)=>{
    if(err) throw err
    console.log('Conexion establecida')
})

conexion.query('SELECT * FROM tabla WHERE idTabla=1 AND texto=\'Hola\'', (err, rows)=>{
    if(err) throw err
    console.log('Los datos solicitados son:')
    console.log(rows)
})
//Hola
conexion.end();