const nameGerencia = document.getElementById("Gerencia").value;
document.getElementById("cuadroMensaje").style.display = "none";

   function EnviarGerencia() {
      document.getElementById("root").style.display="none";
      document.getElementById("MostrarGerencia").innerHTML =  nameGerencia;
      document.getElementById("cuadroMensaje").style.display= "" ;
   }

   /*Cifra el mensaje
   function encode(){
   const m = document.getElementById("mensaje").value;
   const c = document.getElementById("clave").value;
      cifrar = (m-65 + c ) % 26 + 65
   }*/


   /*
document.getElementById("mensaje").onkeyup = function() {mensajeMayuscula()};
function mensajeMayuscula() {
  var x = document.getElementById("mensaje");
  x.value = x.value.toUpperCase();
}
*/