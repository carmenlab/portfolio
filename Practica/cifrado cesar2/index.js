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

function cifrar(){
   document.getElementById("root").style.display="none";
   document.getElementById("cuadroMensaje").style.display = "none";
   document.getElementById("titulo").innerHTML = document.getElementById("Gerencia").value;
   document.getElementById("cuadroDescifrado").style.display= "";
   //document.getElementById("mensajecifrado").value="";

   let str = document.getElementById("mensaje").value; //texto introducido
   let desplazamiento= parseInt(document.getElementById("clave").value);
   let  textoCifrado = "";
   //document.getElementById("mensajecifrado").innerHTML=document.getElementById("mensajecifrado").textoCifrado;
   
      for (let i = 0 ; i < str.length ; i++){    // recorrer el string 
         let codigoLetra = str.charCodeAt(i);     //convierte a codigo ASCII
       let formulaCifrado;    //fórmula cifrado
       let letraCifrada;      // Valor letra cifrada
         if (codigoLetra >= 65 && codigoLetra <= 90) {         // Compara si esta entre A (65) hasta Z(90)
            formulaCifrado = (codigoLetra - 65 + desplazamiento) % 26 + 65; // formula Cifrado
            letraCifrada =  String.fromCharCode(formulaCifrado); // Convierte el codigo ASCII a letra
            textoCifrado +=letraCifrada; // Agrega la letra cifrada al texto cifrado
         } 
         else if (codigoLetra >= 97 && codigoLetra <=122) { // Compara si esta entre a(97) hasta z(122)
            formulaCifrado = (codigoLetra - 97 + desplazamiento) % 26 + 97; // formula cifrado
            letraCifrada = String.fromCharCode(formulaCifrado); // Convierte el codigo ASCII a letra
            textoCifrado +=letraCifrada; // Agrega la letra cifrada al texto cifrado
          }
         else { //  Si es un espacio vacio o cualquier caracter
            textoCifrado += str[i];  // escribe la letra tal cual esta introducida
         }
         console.log(str);
         console.log (desplazamiento);
         }
         console.log(textoCifrado);
         document.getElementById("mensajecifrado").value= textoCifrado;
}

//Boton Salir en tercer Pantalla, envia a la primera pantalla donde pide la Gerencia
document.getElementById("Inicio").addEventListener("click", PantallaInicio); 

function PantallaInicio() {
   document.getElementById("cuadroDescifrado").style.display = "none";
   document.getElementById("root").style.display="";
 }

