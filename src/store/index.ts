import { combineReducers } from 'redux';
import pokemons from './pokemons';

const createRootReducer = () =>
  combineReducers({
    pokemons,
  });

export default createRootReducer;
