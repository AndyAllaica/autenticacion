<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <script src="configuraciones.js"></script>
    <title>Iniciar Sesión</title>
</head>
<body>
    
    <div class="container">
        <h2>Inicio de Sesión</h2>
        <form id="datos" action="Modelo/Autenticar.php" method="POST">
          <div class="group">      
            <input type="text" name="email" id="email">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Correo Electrónico</label>
          </div>
          
          <div class="group">      
            <input type="password" name="password" id="password">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Contraseña</label>
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        
      </div> 

</body>

</html>