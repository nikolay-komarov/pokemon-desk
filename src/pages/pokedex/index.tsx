import React, { useEffect, useState } from 'react';
import { A } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/layout';
import Heading, { HeadingSize } from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';

import { IPokemon, IPokemonsData } from '../../interfaces/pokemon';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { SECOND_ROUTES } from '../../routes';
import { toCapitalizeFirstLetter } from '../../utils/utils';
import {
  getPokemonsAction,
  getPokemonsData,
  getPokemonsDataLoading,
  getPokemonsLoading,
  getPokemonsTotalData,
  getPokemonsType,
  getTypesAction,
} from '../../store/pokemons';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsType);
  const isTypesLoading = useSelector(getPokemonsLoading);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  // const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', query, [debouncedValue]);

  const data = useSelector(getPokemonsData);
  const total = useSelector(getPokemonsTotalData);
  const isLoading = useSelector(getPokemonsDataLoading);

  console.log('### in pokedex total: ', total);

  useEffect(() => {
    dispatch(getTypesAction());
    dispatch(getPokemonsAction());
  }, []);

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

  return (
    <div className={s.root}>
      <Layout>
        <Heading size={HeadingSize.h3} className={s.pageHeader}>
          {total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input
          className={s.searchInput}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />

        <div>{isTypesLoading ? <p>TypeLoading...</p> : types?.map((type) => <p key={type}>{type}</p>)}</div>

        <div className={s.pokemonGallery}>
          {!isLoading &&
            data &&
            data.map((item: IPokemon) => {
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
