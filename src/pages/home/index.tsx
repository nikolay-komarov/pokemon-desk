import React from 'react';

import Header from '../../components/header';
import Layout from '../../components/layout';
import Button, { ButtonSize, ButtonColor } from '../../components/button';

import s from './home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Header />
    <Layout className={s.contentWrap}>
      <div>
        <h1>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </h1>
        <p>You can know the type of Pokemon, its strengths, disadvatages and abilities</p>
        <Button
          size={ButtonSize.medium}
          color={ButtonColor.green}
          isFullWidth={false}
          onClick={() => console.log('click')}>
          See Pokemons
        </Button>
      </div>
    </Layout>
  </div>
);

export default HomePage;
