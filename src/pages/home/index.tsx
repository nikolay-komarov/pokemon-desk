import React from 'react';

import Header from '../../components/header';
import Button, { ButtonSize, ButtonColor } from '../../components/button';

import s from './home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Header />
    HomePage
    <Button size={ButtonSize.medium} color={ButtonColor.green} isFullWidth={false} onClick={() => console.log('click')}>
      See Pokemons
    </Button>
  </div>
);

export default HomePage;
