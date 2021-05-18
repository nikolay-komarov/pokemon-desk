import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  console.log(match);

  return match;
};

export default App;
