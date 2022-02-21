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

import data from './data/pokemon/pokemon.js';

// document.getElementById("Kanto").onclick = function() {
//         document.getElementById("Kanto").style.display = "none";
//     }
// document.getElementById("Johto").onclick = function() {
//         document.getElementById("Johto").style.display = "none";
//     }


        ///////////Obteniendo los pkm de Kanto en pantalla/////////////
    let dex = '';
    // for(let i = 0; i < 10; i++){
    //          dex += `<img src="${data.pokemon[i].img}">` +`${data.pokemon[i].name}`;
            
    //          let pikachu = document.getElementById("bulbasaur");        
    //          pikachu.innerHTML = dex;
             
    //     }

        ///////Obteniendo los pkm de Johto en pantalla//////
    //let dex2 = '';
    // for (let j = 151; j < 152; j++){
    //         dex2 += `<img src="${data.pokemon[j].img}">`;
    //         let pichu = document.getElementById("bulbasaur2");
    //         pichu.innerHTML = dex2;
    //     }
     //  let normal2 = data.pokemon.filter(normal)



const pikachu = document.getElementById("bulbasaur");
const raichu = document.getElementById("A_Z");

function drawPokemon (arreglo){
    for(let i = 0; i < arreglo.length; i++){
        dex += `<h2>${arreglo[i].name}</h2>
        <p> <img src="${arreglo[i].img}"></p>`;

        }
 }

pikachu.innerHTML=dex;

raichu.addEventListener('change', (evento)=>{
    let mew = '';
    sort_name_asc(data.pokemon, evento.target.id ).forEach(mewtwo =>{
        mew += drawPokemon(data.pokemon.filter(normal))
    })
    pikachu.innerHTML=mew;

})

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
    boton.addEventListener("click", cuandoSeHaceClick);
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
//console.table(sort_name_dsc(data.pokemon));



