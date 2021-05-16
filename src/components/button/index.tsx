import React from 'react';
import cn from 'classnames';

import s from './button.module.scss';

export enum ButtonSize {
  small = 'sizeSmall',
  medium = 'sizeMedium',
}

export enum ButtonColor {
  yellow = 'colorYellow',
  green = 'colorGreen',
}

interface ButtonProps {
  size: ButtonSize;
  color: ButtonColor;
  isFullWidth: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, size, color, isFullWidth, onClick }) => {
  return (
    <button type="button" className={cn(s.root, s[size], s[color], isFullWidth && s.fullWidth)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
