import React from 'react';
import { useRoutes } from 'hookrouter';

import Header from "./components/header";
import routes from './routes';
import NotFoundPage from './pages/not-found';

const App = () => {
  const match = useRoutes(routes);
  return match
    ? (
      <>
        <Header/>
        {match}
        {}
      </>
    )
    : <NotFoundPage/>;
};

export default React.memo(App);
