import React from 'react';

import useData from '../../hooks/getData';

import { IPokemon } from '../../interfaces/pokemon';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon id equal to {id}</div>;
};

export default PokemonPage;
