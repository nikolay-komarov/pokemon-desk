import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import NotFoundPage from './pages/not-found';

const App = () => useRoutes(routes) || <NotFoundPage />;

// {
//   // const match = useRoutes(routes);
//
//   return useRoutes(routes) || <NotFoundPage />;
// };

export default App;
