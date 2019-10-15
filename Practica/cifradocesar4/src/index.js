document.getElementById("cuadroMensaje").style.display = "none";
document.getElementById("cuadroDescifrado").style.display = "none";


//funcion Envia campo de Gerencia introducido por el usuario
const EnviarGerencia = () => {
   document.getElementById("root").style.display="none";
   document.getElementById("MostrarGerencia").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroMensaje").style.display= "" ;
   document.getElementById("cuadroDescifrado").style.display = "none";
};

document.getElementById("EnvioGerencia").addEventListener("click", EnviarGerencia); 

//Segunda Pantalla con botones cifrar y descifrar
const cifrar = () => {
   document.getElementById("root").style.display="none";
   document.getElementById("cuadroMensaje").style.display = "none";
   document.getElementById("titulo").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroDescifrado").style.display= "";

   let str = document.getElementById("mensaje").value; //texto introducido
   let desplazamiento= parseInt(document.getElementById("clave").value);
   // console.log(str);
   // console.log(desplazamiento);
   document.getElementById("mensajecifrado").value= window.cipher.encode(desplazamiento, str);    
};

const descifrar = () => {
   document.getElementById("root").style.display="none";
   document.getElementById("cuadroMensaje").style.display = "none";
   document.getElementById("titulo").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroDescifrado").style.display= "";

   let str = document.getElementById("mensaje").value; //texto introducido
   let desplazamiento= parseInt(document.getElementById("clave").value);
   // console.log(str);
   // console.log(desplazamiento);
   document.getElementById("mensajecifrado").value= window.cipher.decode(desplazamiento, str);    
};

//Boton cifrar, segunda Pantalla
document.getElementById("botoncifrar").addEventListener("click", cifrar); 
document.getElementById("botondescifrar").addEventListener("click", descifrar); 


//Funcion en tercer Pantalla
const PantallaInicio = () => {
   document.getElementById("cuadroDescifrado").style.display = "none";
   document.getElementById("root").style.display="";
 };

 //Boton Salir en tercer Pantalla, envia a la primera pantalla donde pide la Gerencia
document.getElementById("Inicio").addEventListener("click", PantallaInicio); 

