import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes/routes';

const App = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
