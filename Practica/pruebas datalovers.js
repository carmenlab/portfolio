//INDEX

let dataLol =window.LOL.data;
let uno = Object.keys(window.LOL.data);

  for (let x in uno) {
    let imagen= dataLol[uno[x]].img;
    html= >
    document.getElementById("root").innerHTML += uno[x] +"<br>" +  imagen + "<br>";
console.log(x);
console.log(imagen);
  };

//document.getElementById('boton').addEventListener('click',cargarJson);

/*function cargarJson(){
  fetch("./data/lol/lol.json")
  .then(function(res) {
   return res.json();
  })
  .then(function(data){
    console.log(data);
  })
}
*/



  /* for(let i=0; i<=uno.length; i++){
   let vista  = uno[i];
   let muestra=JSON.stringify(vista);
  document.write(vista+'<br>');
*/
  //console.log(uno[i]);
  //console.log(vista);
 // console.log(muestra);
//};

//dataLol =window.LOL.data;
//let x = dataLol;
//document.getElementById("root").innerHTML = x;
//console.log(x);
  //let datos=window.LOL.data;
  //let muestra=JSON.stringify(datos); //volver los datos de un arreglo en string
  //let nombre=JSON.parse(muestra);

  //console.log(Object.keys(window.LOL.data));
  //console.log(muestra);
  //console.log(nombre.Aatrox.name);
