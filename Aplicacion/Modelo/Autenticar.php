<?php
$correo = $_POST['email'];
$contrasena = $_POST['password'];

include("../Config/conexion.php");

// Utilizar consultas preparadas para prevenir SQL injection
/*$sql = "SELECT * FROM usuario WHERE correo = ? AND passw = ?";
$stmt = mysqli_prepare($conexion, $sql);

// Vincular los parámetros
mysqli_stmt_bind_param($stmt, "ss", $correo, $contrasena);
 
// Ejecutar la consulta
mysqli_stmt_execute($stmt);

// Obtener el resultado
$resultado = mysqli_stmt_get_result($stmt);

// Cerrar la consulta preparada
mysqli_stmt_close($stmt);
*/
$sql= "SELECT *from usuario WHERE correo='$correo' AND passw = '$contrasena'"; 
$resultado=mysqli_query($conexion,$sql);
// Incluir la vista de la tabla
if (mysqli_num_rows($resultado) > 0) {
     // Si hay resultado, redirigir a producto.php
     header("Location: ../Vista/producto.php");
     exit();
 } else {
     ?>
          <script>
               alert("El usuario no se encuentra registrado");
          </script>
     <?php
 }
?>
