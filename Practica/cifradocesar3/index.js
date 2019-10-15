//let nameG = document.getElementById("Gerencia").value;
document.getElementById("cuadroMensaje").style.display = "none";
document.getElementById("cuadroDescifrado").style.display = "none";

document.getElementById("EnvioGerencia").addEventListener("click", EnviarGerencia); 

function EnviarGerencia() {
   document.getElementById("root").style.display="none";
   document.getElementById("MostrarGerencia").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroMensaje").style.display= "" ;
   document.getElementById("cuadroDescifrado").style.display = "none";
}

//Boton cifrar, segunda Pantalla
document.getElementById("botoncifrar").addEventListener("click", cifrar); 
document.getElementById("botondescifrar").addEventListener("click", descifrar); 

function cifrar(){
   document.getElementById("root").style.display="none";
   document.getElementById("cuadroMensaje").style.display = "none";
   document.getElementById("titulo").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroDescifrado").style.display= "";

   let str = document.getElementById("mensaje").value; //texto introducido
   let desplazamiento= parseInt(document.getElementById("clave").value);
   // console.log(str);
   // console.log(desplazamiento);
   document.getElementById("mensajecifrado").value= window.cipher.encode(str, desplazamiento);    
}

function descifrar(){
   document.getElementById("root").style.display="none";
   document.getElementById("cuadroMensaje").style.display = "none";
   document.getElementById("titulo").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroDescifrado").style.display= "";

   let str = document.getElementById("mensaje").value; //texto introducido
   let desplazamiento= parseInt(document.getElementById("clave").value);
   // console.log(str);
   // console.log(desplazamiento);
   document.getElementById("mensajecifrado").value= window.cipher.decode(str, desplazamiento);    
}

//Boton Salir en tercer Pantalla, envia a la primera pantalla donde pide la Gerencia
document.getElementById("Inicio").addEventListener("click", PantallaInicio); 

function PantallaInicio() {
   document.getElementById("cuadroDescifrado").style.display = "none";
   document.getElementById("root").style.display="";
 }

