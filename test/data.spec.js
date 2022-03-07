import { sort_num_dsc } from '../src/data.js';
import { ice } from '../src/data.js';
import data from '../test/mockData.js';


describe("ice", () => {
  it("is a function", () => {
      expect(typeof ice).toBe("function"); 
});

  it("Show filter by ice pokemon", () => {
    expect(ice(data.pokemon[3], "ice")).toBe(true);
});
});

 describe('Probando sort', () => {
   it('is a function', () => {
    expect(typeof sort_num_dsc).toBe('function');
   });

   it("Show pokemon sorted by dsc number", () => {
    expect(sort_num_dsc(data.pokemon)).toStrictEqual(
    
[{
  "num": "215",
  "name": "sneasel",
  "generation": {
    "num": "generation ii",
    "name": "johto"
  },
  "type": [
    "dark",
    "ice"
  ],
  "stats": {
    "base-attack": "189",
    "base-defense": "146",
    "base-stamina": "146",
    "max-cp": "2051",
    "max-hp": "127"
  },
  "resistant": [
    "ice",
    "psychic",
    "ghost",
    "dark"
  ],
  "weaknesses": [
    "fire",
    "fighting",
    "bug",
    "rock"
  ],
},
{
  "num": "146",
  "name": "moltres",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "fire",
    "flying"
  ],
  "stats": {
    "base-attack": "251",
    "base-defense": "181",
    "base-stamina": "207",
    "max-cp": "3465",
    "max-hp": "175"
  },
  "resistant": [
    "fire",
    "grass",
    "fighting",
    "bug",
    "steel"
  ],
  "weaknesses": [
    "water",
    "electric",
    "rock"
  ],
},
{
  "num": "145",
  "name": "zapdos",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "electric",
    "flying"
  ],
  "stats": {
    "base-attack": "253",
    "base-defense": "185",
    "base-stamina": "207",
    "max-cp": "3527",
    "max-hp": "175"
  },
  "resistant": [
    "grass",
    "fighting",
    "flying",
    "bug",
    "steel"
  ],
  "weaknesses": [
    "ice",
    "rock"
  ],
},
{
  "num": "144",
  "name": "articuno",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "ice",
    "flying"
  ],
  "stats": {
    "base-attack": "192",
    "base-defense": "236",
    "base-stamina": "207",
    "max-cp": "3051",
    "max-hp": "175"
  },
  "resistant": [
    "grass",
    "ground",
    "bug"
  ],
  "weaknesses": [
    "fire",
    "electric",
    "rock",
    "steel"
  ],
    }]);
       });
           });
