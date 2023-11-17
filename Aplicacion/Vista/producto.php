<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <script src="../configuraciones.js"></script>
    <title>Tienda de Productos</title>

</head> 
<body>
    <header>
        <h1>Agregar Productos</h1>
        <button id="miBoton" onclick="redireccionar()">Salir</button>
        <script>
        function redireccionar() {
            // Cambia "nueva_pagina.html" por la URL de la página a la que quieres redirigir
            window.location.href = "../index.php";
        }
    </script>
        
    </header>

    <div class="container">
        <form id="productForm"  action="../Modelo/insertar.php" method="POST">
            <label for="productName">Nombre del Producto:</label>
            <input type="text" name="productName" id="productName" required>

            <label for="productPrice">Precio del Producto:</label>
            <input type="number" name="productPrice" id="productPrice" step="1.00" required>

            <label for="productImage">Categoria:</label>
            <input type="text" name="productCat" id="productCat" required>

            <center><button type="submit">Agregar Producto</button></center>
        </form>

        <!-- <div class="product">
            <img src="producto1.jpg" alt="Producto 1">
            <div class="product-info">
                <div class="product-title">Producto 1</div>
                <div class="product-price">$19.99</div>
            </div>
        </div> -->
    </div>

    <footer>
        &copy; 2023 Seguridad Informática
    </footer>
</body>
</html>
