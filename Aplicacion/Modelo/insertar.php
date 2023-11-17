<?php
include("../Config/conexion.php");

// Obtener los datos del formulario
$nombre = $_POST['productName'];
$precio = $_POST['productPrice'];
$categoria = $_POST['productCat'];

// Utilizar consultas preparadas para prevenir SQL injection
/*
$sql = "INSERT INTO productos(nombre, precio, categoria) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($conexion, $sql);

// Vincular los parámetros
mysqli_stmt_bind_param($stmt, "sds", $nombre, $precio, $categoria);

// Ejecutar la consulta
$resultado = mysqli_stmt_execute($stmt);

// Cerrar la consulta preparada
mysqli_stmt_close($stmt);
*/
$sql="INSERT INTO productos(nombre, precio, categoria) values('$nombre','$precio','$categoria')";
$resultado=mysqli_query($conexion,$sql);
// Verificar si la inserción fue exitosa
if ($resultado) {
    ?>
    <script>
      alert("El producto se ha insertado correctamente.")
      window.location.href = "../Vista/producto.php";
    </script>
    <?php
} else {
    echo "Error en la inserción: " . mysqli_error($conexion);
    ?>
    <script>
      alert("Error en agregar el producto.")
      //window.location.href = "../Vista/producto.php";
    </script>
    <?php
}

// Cerrar la conexión
mysqli_close($conexion);
?>
