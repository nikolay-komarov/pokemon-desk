import React from 'react';

import s from './heading.module.scss';

export enum HeadingSize {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  Paragraph,
}

interface HeadingProps {
  size: HeadingSize;
}

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  const renderHeding = () => {
    switch (size) {
      case HeadingSize.h1:
        return <h1 className={s.h1}>{children}</h1>;
      case HeadingSize.h2:
        return <h2 className={s.h2}>{children}</h2>;
      case HeadingSize.h3:
        return <h3 className={s.h3}>{children}</h3>;
      case HeadingSize.h4:
        return <h4 className={s.h4}>{children}</h4>;
      case HeadingSize.h5:
        return <h5 className={s.h5}>{children}</h5>;
      case HeadingSize.h6:
        return <h6 className={s.h6}>{children}</h6>;
      case HeadingSize.Paragraph:
        return <p className={s.paragraph}>{children}</p>;
      default:
        return <h1 className={s.h1}>{children}</h1>;
    }
  };

  return renderHeding();
};

export default Heading;
