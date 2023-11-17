function mostrarContrasena(){
      var tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

/*
const pass = document.getElementById("password"),
    icon = document.querySelector(".bx");

icon.addEventListener("click",e=>{
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-hide')
    }else{
        tipo.type = "password";
        icon.classList.add('bx-show-alt')
        icon.classList.remove('bx-hide')
    }
})
*/