 import data from './data/pokemon/pokemon.js';
export  const normal = (token) => {
 if ((token.type[0] === 'normal' ) ||(token.type[1] === 'normal' )) {
    return true; 
  } return false;
};

export  const fire = (token) => {
  if ((token.type[0] === 'fire' ) || (token.type[1] === 'fire' )){
    return true;
  } return false;
};

export  const water = (token) => {
  if ((token.type[0] === 'water' ) ||(token.type[1] === 'water' )) {
    return true;
  } return false;
};

export  const electric = (token) => {
  if ((token.type[0] === 'electric' ) || (token.type[1] === 'electric' )) {
    return true;
  } return false;
};

export  const grass = (token) => {
  if ((token.type[0] === 'grass' ) ||(token.type[1] === 'grass' )) {
    return true;
  } return false;
};

export  const ice = (token) => {
  if ((token.type[0] === 'ice' ) ||(token.type[1] === 'ice' )) {
    return true;
  } return false;
};

export  const fighting = (token) => {
  if ((token.type[0] === 'fighting' ) ||(token.type[1] === 'fighting' )){
    return true;
  } return false;
};

export  const poison = (token) => {
  if ((token.type[0] === 'poison' ) ||(token.type[1] === 'poison' )) {
    return true;
  } return false;
};

export  const ground = (token) => {
  if ((token.type[0] === 'ground' ) ||(token.type[1] === 'ground' )) {
    return true;
  } return false;
};

export  const flying = (token) => { 
  if ((token.type[0] === 'flying' ) ||(token.type[1] === 'flying' )) {
    return true;
  } return false;
};

export  const psychic = function (token) { 
  if ((token.type[0] === 'psychic' ) ||(token.type[1] === 'psychic' )) {
    return true;
  } return false;   
};

export  const bug = function (token) { 
  if ((token.type[0] === 'bug' ) ||(token.type[1] === 'bug' )){
    return true;
  } return false; 
};

export  const rock = function (token) { 
  if ((token.type[0] === 'rock' ) ||(token.type[1] === 'rock' )){
    return true;
  } return false;   
};

export  const ghost = function (token) { 
  if ((token.type[0] === 'ghost' ) ||(token.type[1] === 'ghost' )){
    return true;
  } return false;
};

export  const dragon = function (token) { 
  if ((token.type[0] === "dragon" ) || (token.type[1] === "dragon" )){
    return true;   
  } return false; 
};      

export  const dark = function (token) { 
  if ((token.type[0] === "dark" ) || (token.type[1] === "dark" )){
    return true;   
  } return false; 
};  

export  const steel = function (token) { 
  if ((token.type[0] === "steel" ) || (token.type[1] === "steel" )){
    return true;   
  } return false;    
};

export  const fairy = function (token) { 
  if ((token.type[0] === "fairy" ) || (token.type[1] === "fairy" )){
    return true;   
  } return false;   
 };                   

export const region_kanto = function (token){
  if (token.generation.name === "kanto"){
    return true;
  } return false;
};
export const region_johto = function (token){
  if (token.generation.name === "johto"){
    return true;
  } return false;
};

//WEAKNESSES //
// export  const wfire = (token) => {
//   if ( (token.weaknesses[0]== 'steel') || (token.weaknesses[1] == 'steel' )||(token.weaknesses[2] == 'steel' )||(token.weaknesses[3] == 'steel' )) {
//     return true;
//   }
//   return false;
// };

export const best_ivs = (token) =>{
  return token.sort((a, b)=>{
    if (((parseInt(a.stats['base-attack'])+ 
    parseInt(a.stats['base-defense'])+
    parseInt(a.stats['base-stamina']))/3) > ((parseInt(b.stats['base-attack'])+
    parseInt(b.stats['base-defense'])+
    parseInt(b.stats['base-stamina']))/3)) {
      return -1;
    } else if (((parseInt(a.stats['base-attack'])+ 
    parseInt(a.stats['base-defense'])+
    parseInt(a.stats['base-stamina']))/3) < ((parseInt(b.stats['base-attack'])+
    parseInt(b.stats['base-defense'])+
    parseInt(b.stats['base-stamina']))/3)){
      return 1;
    } return 0;
  })
}

export const worst_ivs = (token) =>{
  return token.sort((a, b)=>{
    if (((parseInt(a.stats['base-attack'])+ 
    parseInt(a.stats['base-defense'])+
    parseInt(a.stats['base-stamina']))/3) > ((parseInt(b.stats['base-attack'])+
    parseInt(b.stats['base-defense'])+
    parseInt(b.stats['base-stamina']))/3)) {
      return 1;
    } else if (((parseInt(a.stats['base-attack'])+ 
    parseInt(a.stats['base-defense'])+
    parseInt(a.stats['base-stamina']))/3) < ((parseInt(b.stats['base-attack'])+
    parseInt(b.stats['base-defense'])+
    parseInt(b.stats['base-stamina']))/3)){
      return -1;
    } return 0;
  })
}

export const sort_num_dsc = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.num > b.num){
  return -1;
  } else if (a.num < b.num){
    return 1;
  } return 0;
  })} ;
  
export const sort_num_asc = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.num > b.num){
  return 1;
  } else if (a.num < b.num){
    return -1;
  } return 0;
  })} ;

export const sort_name_asc = (pkmn) => {
  return pkmn.sort((a,b) => { 
    if (a.name > b.name){
      return 1;
      } else if (a.name < b.name){
        return -1;
      } return 0;
      })} ;

export const sort_name_dsc = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.name > b.name){
  return -1;
  } else if (a.name < b.name){
    return 1;
  } return 0;
  })} ;


export function poke_cards(pkmn){
    return `<div class="card_style"><h3 id="card_name">${pkmn.num} ${pkmn.name}</h3>
     <img id="img" src="${pkmn.img}">
     <p id="card_type">${pkmn.type}</p> 
     <img id="egg" src="../src/Logos pokemon/egg.png" alt="Egg"> ${pkmn.egg} 
     <p><img id="candy" src="../src/Logos pokemon/candy.jpg" alt="Candy"> Buddy Distance: ${pkmn['buddy-distance-km']}km</p>
     Average IVs: ${parseInt((parseInt(pkmn.stats['base-attack'])+parseInt(pkmn.stats['base-defense'])+parseInt(pkmn.stats['base-stamina']))/3)}
     <br> Max CP: ${pkmn.stats['max-cp']}  Max HP: ${pkmn.stats['max-hp']}  
    
     </div> `
  }
             /////////SEARCH FILTER//////
const pokemonList = data.pokemon;
export function name_filter(){
    let box_text = document.getElementById("search_input").value.toLowerCase();
    let filtered = new Array();
    
    for (const pokemon of pokemonList){
      if(pokemon.name.includes(box_text)){
        filtered.push(pokemon);
        }
    } return filtered
  }