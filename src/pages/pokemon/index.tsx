import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  // todo: add useData('getPokemon') by id

  return <div>This is pokemon id equal to {id}</div>;
};

export default PokemonPage;
