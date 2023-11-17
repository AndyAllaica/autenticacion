

document.getElementById('datos').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe de la manera predeterminada
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;

    // Realizar cualquier acción con los datos, por ejemplo, imprimir en la consola
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', correo);

    // Puedes realizar otras acciones aquí, como enviar los datos a un servidor mediante AJAX
});
