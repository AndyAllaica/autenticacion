let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Musica1234",
    database: "ejemplo",
    port: "3307"
})

conexion.connect(function(error){
    if (error){
        throw error;
    }
    else{
        console.log("Conexion existosa");
    }
})

function mostrarContrasena(){
      var tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

function autenticar() {
    const sqlQuery = "SELECT * FROM usuario WHERE correo = ? AND contra = ?";

        const params = [usuario, contra];

        conexion.query(sqlQuery, params, (err, rows) => {
            if (err) {
                console.error('Error en la autenticación:', err);
                alert('Autenticación fallida. Verifica tus credenciales.');
            } else {
                window.location.href = 'producto.html';
            }
        })
}

function registro(){
    const sqlQuery = "INSERT INTO tabla (user, contra) VALUES (?, ?)";

    const params = [usuario, contra];

    conexion.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            alert('Error al insertar datos.');
        } else {
            console.log('Datos insertados correctamente. ID del nuevo registro:', result.insertId);
            alert("Datos insertados")
        }
    })
}