import React from 'react';

import Header from '../../components/header';
import Layout from '../../components/layout';
import Button, { ButtonColor, ButtonSize } from '../../components/button';
import Parallax from '../../components/parallax';
import Heading, { HeadingSize } from '../../components/heading';

import s from './home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Header />
    <Layout className={s.contentWrap}>
      <div>
        <Heading size={HeadingSize.h1}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <Heading size={HeadingSize.h3}>
          You can know the type of Pokemon, its strengths, disadvatages and abilities
        </Heading>
        <Button
          size={ButtonSize.medium}
          color={ButtonColor.green}
          isFullWidth={false}
          onClick={() => console.log('click')}>
          See Pokemons
        </Button>
      </div>
      <div>
        <Parallax />
      </div>
    </Layout>
  </div>
);

export default HomePage;
