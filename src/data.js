export  const normal = (token) => {
  if (token.type[0] == 'normal' ) {
    return true;
  } else if (token.type[1] == 'normal' ){
    return true;
  } 
    return false;
};

export  const fire = (token) => {
  if (token.type[0] == 'fire' ) {
    return true;
  } else if (token.type[1] == 'fire' ){
    return true;
  } 
    return false;
};

export  const water = (token) => {
  if (token.type[0] == 'water' ) {
    return true;
  } else if (token.type[1] == 'water' ){
    return true;
  } 
    return false;
};

export  const electric = (token) => {
  if (token.type[0] == 'electric' ) {
    return true;
  } else if (token.type[1] == 'electric' ){
    return true;
  } 
    return false;
};

export  const grass = (token) => {
  if (token.type[0] == 'grass' ) {
    return true;
  } else if (token.type[1] == 'grass' ){
    return true;
  } 
    return false;
};

export  const ice = (token) => {
  if (token.type[0] == 'ice' ) {
    return true;
  } else if (token.type[1] == 'ice' ){
    return true;
  } 
    return false;
};

export  const fighting = (token) => {
  if (token.type[0] == 'fighting' ) {
    return true;
  } else if (token.type[1] == 'fighting' ){
    return true;
  } 
    return false;
};

export  const poison = (token) => {
  if (token.type[0] == 'poison' ) {
    return true;
  } else if (token.type[1] == 'poison' ){
    return true;
  } 
    return false;
};

export  const ground = (token) => {
  if (token.type[0] == 'ground' ) {
    return true;
  } else if (token.type[1] == 'ground' ){
    return true;
  } 
    return false;
};

export  const flying = function (token) { 
  if (token.type[0] == "flying" ) {
    return true;
  }else if(token.type[1] == "flying" ){
    return true;
   }
    return false;
};

export  const psychic = function (token) { 
  if (token.type[0] == "psychic" ) {
    return true;
  }else if(token.type[1] == "psychic" ){
    return true;
    }
    return false;   
};

export  const bug = function (token) { 
  if (token.type[0] == "bug" ) {
    return true;
  }else if(token.type[1] == "bug" ){
    return true;
  }
    return false; 
};

export  const rock = function (token) { 
  if (token.type[0] == "rock" ) {
    return true;   
  }else if(token.type[1] == "rock" ){
    return true;
 }
    return false;   
};

export  const ghost = function (token) { 
  if (token.type[0] == "ghost" ) {
    return true;
  }else if(token.type[1] == "ghost" ){
    return true;
 }
    return false;
};

export  const dragon = function (token) { 
  if (token.type[0] == "dragon" ) {
    return true;   
  }else if(token.type[1] == "dragon" ){
    return true;
 }
    return false; 
};      

export  const dark = function (token) { 
  if (token.type[0] == "dark" ) {
    return true;   
  }else if(token.type[1] == "dark" ){
    return true;
   }
    return false; 
};  

export  const steel = function (token) { 
  if (token.type[0] == "steel" ) {
    return true;   
  }else if(token.type[1] == "steel" ){
   return true;
   }
    return false;    
};

export  const fairy = function (token) { 
  if (token.type[0] == "fairy" ) {
    return true;   
  }else if(token.type[1] == "fairy" ){
    return true;
  }
    return false;   
 };                   




// WEAKNESSES //
// export  const wfire = (token) => {
//   if (token.type[0] == 'fire' ) {
//     return true;
//   } else if (token.type[1] == 'fire' ){
//     return true;
//   } 
//   return false;
// };

/// ESTAS SI SIRVEN :)   ///

export const sorting = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.num > b.num){
  return -1;
  } else if (a.num < b.num){
    return 1;
  }
  return 0;
  })} ;
  
export const sorting_asc = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.num > b.num){
  return 1;
  } else if (a.num < b.num){
    return -1;
  }
  return 0;
  })} ;

export const sort_name_asc = (pkmn) => {
  return pkmn.sort((a,b) => { 
    if (a.name > b.name){
      return 1;
      } else if (a.name < b.name){
        return -1;
      }
      return 0;
      })} ;


export const sort_name_dsc = (pkmn) => {
  return pkmn.sort((a, b) => { 
  if (a.name > b.name){
  return -1;
  } else if (a.name < b.name){
    return 1;
  }
  return 0;
  })} ;


