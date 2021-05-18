import React from 'react';

import s from './header.module.scss';

import { ReactComponent as LogoSVG } from './assets/logoPokemon.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.pokemonLogo}>
        <LogoSVG />
      </div>
      <div className={s.menuWrap}>
        {MENU.map(({ value, link, id }) => (
          <a href={link} className={s.menuLink} key={id}>
            {value}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Header;
