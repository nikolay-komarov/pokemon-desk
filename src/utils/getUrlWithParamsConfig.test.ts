import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента getPokemons и пустой объект, на выходе получить объект с поями pathname, protocol, host и пустой объект', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать два аргумента getPokemons и {name: "Pikachu"}, на выходе получить объект с поями pathname, protocol, host и query с полем name равным Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать два аргумента getPokemon и {id: 25}, на выходе получить объект с поями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
