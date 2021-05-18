import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './header.module.scss';

import { ReactComponent as LogoSVG } from './assets/logoPokemon.svg';

import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();

  console.log('### route: ', path);

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <LogoSVG />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
