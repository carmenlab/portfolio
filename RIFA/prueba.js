//const getRandom = () => participates[Math.floor(Math.random()*participates.length)];
  //console.log(getRandom(participates));

/*fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-05-bc-core-gdl-003/users")
.then(data => data.json())
.then(data => {
  console.log(data);
  let participates = data.map((names)=> names.name);
  console.log(participates);
  //getRandom(participates);
});*/
let datos = fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-05-bc-core-gdl-003/users")
.then(data => data.json())
.then(data => {
  console.log(data);
});
console.log(datos);

*let participates = ["OFE", "SAM", "FLORE", "JUAN", "FRANK", "ANAPAULA",  "BREEN", "CARMEN", "CELINA"];
const getRandom = (participates) => participates[Math.floor(Math.random()*participates.length)];
console.log(getRandom(participates));*/

/*fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-05-bc-core-gdl-003/users")
.then(data => data.json())
.then(data => {
  //console.log(data);
  let participates = data.map((names)=> names.name);
  //console.log(participates);
  const getRandom = (participates) => participates[Math.floor(Math.random()*participates.length)];
  console.log(getRandom(participates));
});*/
//let participates=[];
/*const getRandom = (participates) => {
rifa= participates[Math.floor(Math.random()*participates.length)];
console.log(rifa);
};
fetch("https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-05-bc-core-gdl-003/users")
.then(data => data.json())
.then(data => {
  //console.log(data);
 participates = data.map((names)=> names.name);
  console.log(participates);
  getRandom(participates);
});*/
