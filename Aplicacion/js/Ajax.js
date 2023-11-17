
function miFuncion(){
    $(document).ready(function(){
        $('#btnguardar').click(function(){
           var datos = $('#frmAjax').serialize();
           alert(datos);
            $.ajax({
            type:"POST",
            url:"../Modelo/Insertar.php",
            data:datos,
            success:function(r){
                if(r!=1){
                alert('Ingresado correctamente');
            }
                else{
                alert("fallo al ingresar");
            }
            }
            });
            return false
       });
    });
    
    }