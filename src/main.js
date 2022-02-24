import { sorting } from './data.js';
import { sorting_asc } from './data.js';
import { sort_name_asc } from './data.js';
import { sort_name_dsc } from './data.js';
import { ghost } from './data.js';
import { fire } from './data.js';
import { normal } from './data.js';
import { water } from './data.js';
import { electric } from './data.js';
import { grass } from './data.js';
import { ice } from './data.js';
import { fighting } from './data.js';
import { poison } from './data.js';
import { ground } from './data.js';
import { flying } from './data.js';
import { psychic } from './data.js';
import { bug } from './data.js';
import { rock } from './data.js';
import { dragon } from './data.js';
import { dark } from './data.js';
import { steel } from './data.js';
import { fairy } from './data.js';
import { celebi } from './data.js';
import { unown } from './data.js';
import {filtroNombre} from './data.js';
import {temporalFilter} from './data.js';
import data from './data/pokemon/pokemon.js';

// document.getElementById("Kanto").onclick = function() {
//         document.getElementById("Kanto").style.display = "none";
//     }
// document.getElementById("Johto").onclick = function() {
//         document.getElementById("Johto").style.display = "none";
//     }

 ///////////// SEARCH BUTTON FUNCTION ////////////
// let search_val = document.getElementById('searchbtn')
// console.log(search_val);
 

// document.getElementsByClassName('search_1').onclick = funcionquenohemosinventado
// function funcionquenohemosinventado (chain){
    
//     const buscados = unown.indexOf(chain)
//     console.log(buscados);
//     let jolteon = document.getElementById("bulbasaur");        
//     jolteon.innerHTML = buscados;
// }
            //////INTENTARE ESTO OKIS///////
  const nodoIvysaur = document.getElementById('ivysaur')
  const filtroPorNombre = document.getElementById('searchbtn').value
  const goBtn = document.querySelector('.search_go')
  
  let todoElHTML=""    
  
  data.pokemon.forEach(pkmn =>{
      todoElHTML+= unown(pkmn)
  })

nodoIvysaur.innerHTML=todoElHTML
goBtn.addEventListener("click", () => {
    let recibo ="";
    filtroNombre(data.pokemon.name, filtroPorNombre).forEach(pokefiltrado =>{
        recibo+=unown(pokefiltrado);
    })
    nodoIvysaur.innerHTML = recibo
})

        ///////////Obteniendo los pkm de Kanto en pantalla/////////////
    let pkdx = '';
    for (let p = 0; p < 10; p++){
             pkdx += `<img src="${data.pokemon[p].img}">` +`${data.pokemon[p].name}`;
            
             let pikadex = document.getElementById("ivysaur");        
             pikadex.innerHTML = pkdx;
             
        }

        ///////Obteniendo los pkm de Johto en pantalla//////
    // let dex2 = '';
    // for (let j = 0; j < 1; j++){
    //         dex2 += `<img src="${data.pokemon[j].img}">`;
    //         let pichu = document.getElementById("bulbasaur2");
    //         pichu.innerHTML = dex2;
    //     }
     //  let normal2 = data.pokemon.filter(normal)



const pikachu = document.getElementById("bulbasaur");
const entei = document.getElementById("ivysaur"); //PORQUE PUSE ENTEI??
const raichu = document.getElementById("options");






let mew = '';
let mew2 = '';
let mew3 = '';
let mew4 = '';
raichu.addEventListener('change', (evento)=>{
    if(evento.target.value == 'sort_name_asc'){
    sort_name_asc(data.pokemon, evento.target.value ).forEach(mewtwo =>{
      mew += celebi(mewtwo)
      pikachu.innerHTML=mew;
     })} else if(evento.target.value == 'sort_name_dsc'){
    sort_name_dsc(data.pokemon, evento.target.value ).forEach(mewtwo =>{
     mew2 += celebi(mewtwo)
     pikachu.innerHTML=mew2;
     })} else if(evento.target.value == 'sorting'){
    sorting(data.pokemon, evento.target.value ).forEach(mewtwo =>{
        mew3 += celebi(mewtwo)
        pikachu.innerHTML=mew3;
     })} else if(evento.target.value == 'sorting_asc'){
     sorting_asc(data.pokemon, evento.target.value ).forEach(mewtwo =>{
        mew4 += celebi(mewtwo)
        pikachu.innerHTML=mew4;
    })}
    
    console.log(celebi); 
    
    
})


let dex = '';
let dexx= ""; // HICE ESTO NUEVO PERO TA MAL 

// function borrar(){   REMOVE FIRST CHILD??? O  jQuery empty()
//     document.getElementById("bulbasaur").display = 'none';
// }

function drawPokemon (arreglo){
    for(let i = 0; i < arreglo.length; i++){
        dexx += `${arreglo[i].name}
         <img src="${arreglo[i].img}">`;
        entei.innerHTML=dexx;     //AQUI IBA PIKACHU
        }
 }

entei.innerHTML=dexx;  //AQUI PIKACHU Y DEC=X


const botones = document.querySelectorAll(".type_button");
const cuandoSeHaceClick = function (evento) {
    if (evento.target.id == "normal"){
    drawPokemon(data.pokemon.filter(normal))
}else if (evento.target.id == "fire"){
    drawPokemon(data.pokemon.filter(fire)) 
}else if (evento.target.id == "water"){
    drawPokemon(data.pokemon.filter(water))  
}else if (evento.target.id == "electric"){
    drawPokemon(data.pokemon.filter(electric))   
}else if (evento.target.id == "grass"){
    drawPokemon(data.pokemon.filter(grass))
}else if (evento.target.id == "ice"){
    drawPokemon(data.pokemon.filter(ice))
}else if (evento.target.id == "fighting"){
    drawPokemon(data.pokemon.filter(fighting))
}else if (evento.target.id == "poison"){
    drawPokemon(data.pokemon.filter(poison))
}else if (evento.target.id == "ground"){
    drawPokemon(data.pokemon.filter(ground))
}else if (evento.target.id == "flying"){
    drawPokemon(data.pokemon.filter(flying))
}else if (evento.target.id == "psychic"){
    drawPokemon(data.pokemon.filter(psychic))
}else if (evento.target.id == "bug"){
    drawPokemon(data.pokemon.filter(bug))
}else if (evento.target.id == "rock"){
    drawPokemon(data.pokemon.filter(rock))
}else if (evento.target.id == "ghost"){
    drawPokemon(data.pokemon.filter(ghost))
}else if (evento.target.id == "dragon"){
    drawPokemon(data.pokemon.filter(dragon))
}else if (evento.target.id == "dark"){
    drawPokemon(data.pokemon.filter(dark))
}else if (evento.target.id == "steel"){
    drawPokemon(data.pokemon.filter(steel))
}else if (evento.target.id == "fairy"){
    drawPokemon(data.pokemon.filter(fairy))
}

  //console.log(resultadoFiltro) 
}
 botones.forEach(boton => {
    boton.addEventListener("click" ,cuandoSeHaceClick);
})
          //////Ordenando pokemones numerica y alfabeticamente////
//document.getElementById('asc').addEventListener('click', sorting_asc)

//       let sortd = `<img src="${data.pokemon.img}">`;
//       document.getElementById('dsc').addEventListener('click', sorting(sortd));
//       document.getElementById('dsc').innerHTML 
      //  BULBASAUR.addEventListener('change', (e)=>{
      //}).
//         console.log(sortd)
    
//

          

//console.log(example, data);
// //console.log((data.pokemon.type))
// console.log((data.pokemon).filter(normal)); 
// console.log((data.pokemon).filter(fire));  
// console.log((data.pokemon).filter(water));
// console.log((data.pokemon).filter(electric));
// console.log((data.pokemon).filter(grass));
// console.log((data.pokemon).filter(ice));
// console.log((data.pokemon).filter(fighting));
// console.log((data.pokemon).filter(poison));
// console.log((data.pokemon).filter(ground));
// console.log((data.pokemon).filter(flying));
// console.log((data.pokemon).filter(psychic));
// console.log((data.pokemon).filter(bug));
// console.log((data.pokemon).filter(rock));
// console.log((data.pokemon).filter(ghost));
// console.log((data.pokemon).filter(dragon));
// console.log((data.pokemon).filter(dark));
// console.log((data.pokemon).filter(steel));
// console.log((data.pokemon).filter(fairy));
// console.table(sorting(data.pokemon));
//console.table(sorting_asc(data.pokemon));
//console.table(sort_name_asc(data.pokemon));
// console.log(temporalFilter (allPokes, pokeType));



