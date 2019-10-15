window.cipher = {
  encode: (string, offset) => {
    let  textoCifrado = "";
    for (let i = 0 ; i < string.length ; i++){    // recorrer el string 
      let codigoLetra = string.charCodeAt(i);     //convierte a codigo ASCII
      let formulaCifrado;    //fórmula cifrado
      let letraCifrada;      // Valor letra cifrada
      if (codigoLetra >= 65 && codigoLetra <= 90) {         // Compara si esta entre A (65) hasta Z(90)
          formulaCifrado = (codigoLetra - 65 + offset) % 26 + 65; // formula Cifrado
          letraCifrada =  String.fromCharCode(formulaCifrado); // Convierte el codigo ASCII a letra
          textoCifrado +=letraCifrada; // Agrega la letra cifrada al texto cifrado
      } 
      else if (codigoLetra >= 97 && codigoLetra <=122) { // Compara si esta entre a(97) hasta z(122)
          formulaCifrado = (codigoLetra - 97 + offset) % 26 + 97; // formula cifrado
          letraCifrada = String.fromCharCode(formulaCifrado); // Convierte el codigo ASCII a letra
          textoCifrado +=letraCifrada; // Agrega la letra cifrada al texto cifrado
      }
      else { //  Si es un espacio vacio o cualquier caracter
          textoCifrado += string[i];  // escribe la letra tal cual esta introducida
      }
    //console.log(str);
    //console.log (offset);
    }
    console.log(textoCifrado);
    return textoCifrado;
  },

  decode: (string, offset) => {
    let  textoDecode = "";
    for (let i = 0 ; i < string.length ; i++){    // recorrer el string 
      let codigoLetraDecode = string.charCodeAt(i);     //convierte a codigo ASCII
      let formulaDecode;    //fórmula cifrado
      let letraDecode;      // Valor letra cifrada
      if (codigoLetraDecode >= 65 && codigoLetraDecode <= 90) {         // Compara si esta entre A (65) hasta Z(90)
          formulaDecode = (codigoLetraDecode - 90 - offset) % 26 + 90; // formula Cifrado
          letraDecode =  String.fromCharCode(formulaDecode); // Convierte el codigo ASCII a letra
          textoDecode +=letraDecode; // Agrega la letra cifrada al texto cifrado
      } 
      else if (codigoLetraDecode >= 97 && codigoLetraDecode <=122) { // Compara si esta entre a(97) hasta z(122)
          formulaDecode = (codigoLetraDecode - 122 - offset) % 26 + 122; // formula cifrado
          letraDecode = String.fromCharCode(formulaDecode); // Convierte el codigo ASCII a letra
          textoDecode +=letraDecode; // Agrega la letra cifrada al texto cifrado
      }
      else { //  Si es un espacio vacio o cualquier caracter
        textoDecode += string[i];  // escribe la letra tal cual esta introducida
      }
    console.log(string);
    console.log (offset);
    console.log(formulaDecode);
    }
    console.log(textoDecode);
    return textoDecode;
  }


  // Propiedad :Valor
  // encode: () => {   },
  // decode. () = > {  }
 /* nombre:'Florencia',
  edad: 23,
  mostrarNombre : function(){
    console.log('hola');
    mostrarNombre1: function1(){
      return cipher.nombre + cipher.edad;

      encode: function(string,offset){
        //funcionalidad cifrar
        return textoCifrado;
      },
      //Parametros
      decode:function(string,offset){
        return textoDecodificado
      }

      metodos y propiedades
      
  }*/

};
