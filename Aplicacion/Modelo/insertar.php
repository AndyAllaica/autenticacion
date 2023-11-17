<?php
include("../Config/conexion.php");

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$categoria = $_POST['categoria'];

// Utilizar consultas preparadas para prevenir SQL injection
$sql = "INSERT INTO producto (nombre, precio, categoria) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($conexion, $sql);

// Vincular los parámetros
mysqli_stmt_bind_param($stmt, "sds", $nombre, $precio, $categoria);

// Ejecutar la consulta
$resultado = mysqli_stmt_execute($stmt);

// Cerrar la consulta preparada
mysqli_stmt_close($stmt);

// Verificar si la inserción fue exitosa
if ($resultado) {
    ?>
    <script>
      alert("El producto se ha insertado correctamente.")
    </script>
    <?php
} else {
    echo "Error en la inserción: " . mysqli_error($conexion);
    ?>
    <script>
      alert("Error en agregar el producto.")
    </script>
    <?php
}

// Cerrar la conexión
mysqli_close($conexion);
?>
