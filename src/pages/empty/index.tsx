import React from 'react';

import Header from '../../components/header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => (
  <div>
    <Header />
    <div>EmptyPage for {title}</div>
  </div>
);

export default EmptyPage;
