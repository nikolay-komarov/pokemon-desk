import React, { useState } from 'react';
import { A } from 'hookrouter';

import Layout from '../../components/layout';
import Heading, { HeadingSize } from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';

import { IPokemon, IPokemonsData } from '../../interfaces/pokemon';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { SECOND_ROUTES } from '../../routes';
import { toCapitalizeFirstLetter } from '../../utils/utils';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((prevState: IQuery) => ({
      ...prevState,
      name: evt.target.value,
    }));
  };

  if (isLoading) {
    return <Heading size={HeadingSize.h4}>Loading...</Heading>;
  }

  if (isError) {
    return <Heading size={HeadingSize.h4}>Something wrong...</Heading>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading size={HeadingSize.h3} className={s.pageHeader}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input
          className={s.searchInput}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />

        <div className={s.pokemonGallery}>
          {!isLoading &&
            data &&
            data.pokemons.map((item: IPokemon) => {
              return (
                <div className={s.pokemonCardPreview} key={item.name}>
                  <A href={SECOND_ROUTES[0].link.replace(':id', item.id.toString())}>
                    <PokemonCard
                      stats={item.stats}
                      types={item.types}
                      img={item.img}
                      name={toCapitalizeFirstLetter(item.name)}
                    />
                  </A>
                </div>
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
