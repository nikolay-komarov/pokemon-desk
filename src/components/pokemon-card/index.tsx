import React from 'react';
import Heading, { HeadingSize } from '../heading';

import s from './pokemon-card.module.scss';

interface PokemonCardProps {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: string[];
  img: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ stats, types, img, name }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={HeadingSize.h4} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {
            types.map((type) => (
              <span key={type} className={s.label}>{type}</span>
            ))
          }
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
