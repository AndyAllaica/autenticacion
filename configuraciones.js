function mostrarContrasena(){
      var tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

/*
const pass = document.getElementById("password"),
    icon = document.querySelector(".bx");

icon.addEventListener("click",e=>{
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-hide')
    }else{
        tipo.type = "password";
        icon.classList.add('bx-show-alt')
        icon.classList.remove('bx-hide')
    }
})
*/

function conectarMySQL() {
    var usuario = document.getElementById("email").value
    var contra = document.getElementById("password").value

    const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Musica1234',
        database: 'ejemplo'
    })

    conexion.connect((err) => {
        if (err) {
            console.error('Error en la conexión:', err);
            alert('Error en la conexión. Verifica la configuración.');
            return; // Detener la ejecución si hay un error de conexión.
        }

        console.log('Conexion establecida');

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
    });
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