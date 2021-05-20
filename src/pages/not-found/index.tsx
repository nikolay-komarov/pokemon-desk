import React from 'react';
import { navigate } from 'hookrouter';

import Button, { ButtonSize, ButtonColor } from '../../components/button';

import s from './not-found.module.scss';
import TeamRocket from './assets/team-rocket.png';

import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.backText}>404</div>
        <div className={s.wrapContent}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.textContent}>
            <span>The rocket team</span> has won this time
          </div>
        </div>
        <Button
          size={ButtonSize.medium}
          color={ButtonColor.yellow}
          isFullWidth={false}
          onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
