import React from 'react';

import s from './heading.module.scss';

export enum HeadingSize {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
}

interface HeadingProps {
  size: HeadingSize;
}

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  const Tag = size as keyof JSX.IntrinsicElements;
  return <Tag className={s[size]}>{children}</Tag>;
};

export default Heading;
