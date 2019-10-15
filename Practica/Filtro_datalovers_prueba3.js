//INDEX
const toShow =() =>{
  let dataLol =LOL.data;
  for (let propName in dataLol) {
    let value = dataLol[propName];
    let image = value.img;
    let title = value.title;
    let attack=  value.info.attack;
    let defense = value.info.defense;
    let magic = value.info.magic;
    let difficulty = value.info.difficulty;
    let tags = value.tags;
    console.log(tags);
   
    //console.log(propName); 
    
    var a = tags.indexOf('Fighter');
    console.log(a);
    console.log(propName);
/*
   let tagsFilter = tags.indexOf('Fighter');
    console.log(tagsFilter);
    
  if ((tagsFilter) != -1){
    console.log(propName);
  };*/
    //const tagsFilter = tags.filter((el) =>
    //el.toLowerCase().indexOf(('Fighter').toLowerCase()) > -1);
  //console.log(tagsFilter);

 if (attack >= 8 ){
    console.log(propName);
 

    document.getElementById("galeria").innerHTML +=
      " " +
       `
      <div class="boxesContainer">
          <div class="cardBox">
              <div class="card">
                <div class="front">
                  <h3 id= "picture"><img src="${image}"></h3>
                  <h3>${propName}</h3>
                </div>
              <div class="back">
                <p>${propName}</p>
                <p>${title}</p>
                <p>ataque: ${attack}</p>
                <p>defensa: ${defense}</p>
                <p>magia: ${magic}</p>
                <p>dificultad: ${difficulty}</p>
              </div>
            </div>
          </div>
        </div>`};
  
  };
  }
  document.getElementById("champions").addEventListener("click",toShow);
/*  
  let producto = {
    id: '38469238976',
    nombre: 'café',
    precio: 2.50,
    marcas:['nestcafe','juan valdez','fama de america'],
    caracteristicas:{
        peso:1.00,
        unidad:'KG'
    }
};

let {
    caracteristicas: {
        peso,
        unidad = 'KG'
    },
    marcas: [marca, ...resto_de_marcas], 
    nombre
} = producto;

console.log(marca) // imprime nescafe
console.log(resto_de_marcas) //imprime ["juan valdez", "fama de america"]
console.log(peso) //imprime 1

let{data: champions}=LOL;
console.log(champions);
let nameChampion = [champions];
//let nameChampion = [{champions}];
console.log(nameChampion);


let{
  data: {
    (property): {title} 
  } 
}=LOL;
console.log(title);*/
//let prueba = champions.filter( => student.score >= 11);
//let approved = champions.filter(student => student.score >= 11);
//console.log(title);

/*
function showMenu({ data = {} }) {
  let prueba = data.filter( => info.attack >= 5);
  console.log(prueba); //imprime ["Item1", "Item2"]
}

showMenu(LOL);*/