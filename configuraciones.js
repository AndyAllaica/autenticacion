function mostrarContrasena(){
      var tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

function conectarMySQL() {
    var usuario = document.getElementById("email").value;
    var contra = document.getElementById("password").value;

    fetch('/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo: usuario, contra: contra })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.autenticado) {
            window.location.href = 'producto.html';
        } else {
            alert('Autenticación fallida. Verifica tus credenciales.');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud al servidor.');
    });
}

function registro(){
    var nom = document.getElementById("productName").value;
    var pre = document.getElementById("productPrice").value;
    var cat = document.getElementById("productCat").value;

    fetch('/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nom, precio: pre, categoria: cat })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.insertado) {
            alert('Producto registrado exitosamente.');
        } else {
            alert('No se pudo registrar el producto.');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud al servidor.');
    });
}