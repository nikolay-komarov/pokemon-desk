const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_TYPES':
      return {
        ...state,
        type: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case 'FETCH_TYPES_RESOLVE':
      return {
        ...state,
        type: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case 'FETCH_TYPES_REJECT':
      return {
        ...state,
        type: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default pokemons;
