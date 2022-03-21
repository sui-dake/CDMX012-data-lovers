import data from './data/pokemon/pokemon.js';
import { sort_num_dsc } from './data.js';
import { sort_num_asc } from './data.js';
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
import { region_johto } from './data.js';
import { region_kanto } from './data.js';
import { poke_cards } from './data.js';
import { name_filter } from './data.js';
import { best_ivs } from './data.js';
import { worst_ivs } from './data.js';
//import { wfire } from './data.js';
        ////SEARCH BUTTON FUNCTION ////

//let searching = "";         
document.getElementById("search_go").addEventListener("click", function() {
    print_poke.innerHTML ="";
     let output = '';
     let names = name_filter();
     names.forEach(name=>{
        output += poke_cards(name)
     })
     print_poke.innerHTML = output;
    }, false
);


const print_poke = document.getElementById("root");
const drop_menu = document.getElementById("options"); 

        //////SORTING POKEMON BY NUMBER AND LETTER////
let name_asc = '';
let name_dsc = '';
let num_dsc = '';
let num_asc = '';
let bst_ivs = '';
let wst_ivs = '';
let filtrd_cards = ""; 
let inter_face =""; 


drop_menu.addEventListener('change', (evento)=>{
    if(evento.target.value == 'sort_name_asc'){
    sort_name_asc(data.pokemon).forEach(sorting =>{
      name_asc += poke_cards(sorting)
      print_poke.innerHTML=name_asc;
     })} else if(evento.target.value == 'sort_name_dsc'){
    sort_name_dsc(data.pokemon).forEach(sorting =>{
     name_dsc += poke_cards(sorting)
     print_poke.innerHTML=name_dsc;
     })} else if(evento.target.value == 'sorting_dsc'){
    sort_num_dsc(data.pokemon).forEach(sorting =>{
        num_dsc += poke_cards(sorting)
        print_poke.innerHTML=num_dsc;
     })} else if(evento.target.value == 'sorting_asc'){
        sort_num_asc(data.pokemon).forEach(sorting =>{
        num_asc += poke_cards(sorting)
        print_poke.innerHTML=num_asc;
     })} else if(evento.target.value == 'best_ivs'){
        best_ivs(data.pokemon).forEach(sorting =>{
        bst_ivs += poke_cards(sorting)
        print_poke.innerHTML=bst_ivs;
     })} else if(evento.target.value == 'worst_ivs'){
        worst_ivs(data.pokemon).forEach(sorting =>{
       wst_ivs += poke_cards(sorting)
        print_poke.innerHTML=wst_ivs;
     })}

})

        //// FILTER FUNCTION ////
data.pokemon.forEach(pkmn =>{
   inter_face+= poke_cards(pkmn)
})

print_poke.innerHTML=inter_face
export const drawPokemon = (array_pkmn) => {
    if(filtrd_cards == ''){
        array_pkmn.forEach(type =>{
        filtrd_cards += poke_cards(type)     
        print_poke.innerHTML=filtrd_cards;     
        })
    }else if(filtrd_cards !== '')
    {print_poke.innerHTML = '';
    filtrd_cards = '';
    array_pkmn.forEach(type =>{
        filtrd_cards += poke_cards(type);
        print_poke.innerHTML=filtrd_cards;     
        })
    }    
 }

const buttons = document.querySelectorAll(".type_button");
 buttons.innerHTML = " ";
const when_clicked = function (event) {
if (event.target.id == "normal"){   
    drawPokemon(data.pokemon.filter(normal))
}else if (event.target.id == "fire"){
    drawPokemon(data.pokemon.filter(fire))  
}else if (event.target.id == "water"){
    drawPokemon(data.pokemon.filter(water))     
}else if (event.target.id == "electric"){ 
    drawPokemon(data.pokemon.filter(electric))   
}else if (event.target.id == "grass"){
    drawPokemon(data.pokemon.filter(grass))
}else if (event.target.id == "ice"){
    drawPokemon(data.pokemon.filter(ice))
}else if (event.target.id == "fighting"){
    drawPokemon(data.pokemon.filter(fighting))
}else if (event.target.id == "poison"){
    drawPokemon(data.pokemon.filter(poison))
}else if (event.target.id == "ground"){
    drawPokemon(data.pokemon.filter(ground))
}else if (event.target.id == "flying"){
    drawPokemon(data.pokemon.filter(flying))
}else if (event.target.id == "psychic"){
    drawPokemon(data.pokemon.filter(psychic))
}else if (event.target.id == "bug"){
    drawPokemon(data.pokemon.filter(bug))
}else if (event.target.id == "rock"){
    drawPokemon(data.pokemon.filter(rock))
}else if (event.target.id == "ghost"){
    drawPokemon(data.pokemon.filter(ghost))
}else if (event.target.id == "dragon"){
    drawPokemon(data.pokemon.filter(dragon))
}else if (event.target.id == "dark"){
    drawPokemon(data.pokemon.filter(dark))
}else if (event.target.id == "steel"){
    drawPokemon(data.pokemon.filter(steel))
}else if (event.target.id == "fairy"){
    drawPokemon(data.pokemon.filter(fairy))
}else if (event.target.id == "kanto"){
    drawPokemon(data.pokemon.filter(region_kanto))
}else if (event.target.id == "johto"){
    drawPokemon(data.pokemon.filter(region_johto))
}

}
 buttons.forEach(buttn => {
    buttn.addEventListener("click" , when_clicked);
})
//console.log((data.pokemon).filter(wfire));
// console.log((data.pokemon).filter(ghost));
// console.table(sorting(data.pokemon));
// console.table(sorting_asc(data.pokemon));
// console.table(sort_name_asc(data.pokemon));