<?php
include("../Vista/Plantilla.php");
include("../Config/conexion.php");

$sql = "SELECT *from usuario";
$resultado=mysqli_query($conexion,$sql);
$pdf=new PDF();
$pdf-> AliasNbPages();
$pdf->AddPage();
while($mostrar = mysqli_fetch_array($resultado))
 {
    
    $pdf->Cell(70,6,$mostrar['id'],1,0,'C');
    $pdf->Cell(20,6,utf8_decode($mostrar['nombre']),1,0,'C');
    $pdf->Cell(70,6,$mostrar['apellido'],1,0,'C');


 }
$pdf->Output('D','reporteD.pdf');






?>