<?php
   $v1=$_GET['var1'];
   if($v1==1)
    include("../Vista/ingreso.php") ;
   else{
    if($v1==2)
    include("../Vista/Mostrar.php") ;
    else
    if($v1==3)
    include("../Vista/Buscar.php") ;
    else
    if($v1==4)
     include("../Vista/MostrarE.php") ;
    else
    if($v1==5)
     include("../Modelo/Reporte1.php") ;
     else
    echo "no selecciona nada";

}

?>