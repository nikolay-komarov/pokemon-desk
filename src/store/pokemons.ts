import { Dispatch } from 'react';
import { IPokemon, IPokemonsData, IPokemonTypes } from '../interfaces/pokemon';

import req from '../utils/request';
import { IStateRequest } from '../interfaces';
import { IInitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}
export enum PokemonsActionPokemons {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}
interface PokemonsAction {
  type: PokemonsActionPokemons;
  payload?: {
    pokemons: IPokemon[];
    total: number;
  };
}

type ActionTypes = TypesAction | PokemonsAction;

export interface IPokemonsInitialState {
  type: IStateRequest<string>;
  pokemons: IStateRequest<IPokemon>;
  total: number;
}

const initialState: IPokemonsInitialState = {
  type: {
    isLoading: false,
    data: null,
    error: null,
  },
  pokemons: {
    isLoading: false,
    data: null,
    error: null,
  },
  total: 0,
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        type: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        type: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        type: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    case PokemonsActionPokemons.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          isLoading: true,
          data: null,
          error: null,
        },
        total: 0,
      };
    case PokemonsActionPokemons.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: action.payload?.pokemons,
          error: null,
        },
        total: action.payload?.total,
      };
    case PokemonsActionPokemons.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          error: action.payload?.pokemons,
        },
        total: 0,
      };
    default:
      return state;
  }
};

export const getPokemonsType = (state: IInitialState) => state.pokemons.type.data;
export const getPokemonsLoading = (state: IInitialState) => state.pokemons.type.isLoading;

export const getPokemonsData = (state: IInitialState) => state.pokemons.pokemons.data;
export const getPokemonsTotalData = (state: IInitialState) => state.pokemons.total;
export const getPokemonsDataLoading = (state: IInitialState) => state.pokemons.pokemons.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const res = await req<IPokemonTypes>('getPokemonsType', {});
      console.log('### res: ', res);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: res });
    } catch (e) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: e });
    }
  };
};

export const getPokemonsAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionPokemons.FETCH_POKEMONS });
    try {
      const res = await req<IPokemonsData>('getPokemons', {});
      console.log('### res: ', res);
      dispatch({
        type: PokemonsActionPokemons.FETCH_POKEMONS_RESOLVE,
        payload: {
          pokemons: res.pokemons,
          total: res.total,
        },
      });
    } catch (e) {
      dispatch({ type: PokemonsActionPokemons.FETCH_POKEMONS_REJECT, payload: e });
    }
  };
};

export default pokemons;
