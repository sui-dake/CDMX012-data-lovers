import { anotherExample } from '../src/data.js';
//import { sort_num_dsc } from './data.js';
import { ice } from '../src/data.js';
//import { poke_cards } from './data.js';
//import { worst_ivs } from './data.js';

describe('ice', () => {
  it('is a function', () => {
    expect(typeof ice).toBe('function');
  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
