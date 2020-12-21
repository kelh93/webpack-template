import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  const { route } = props;
  return <div className='Layout'>{renderRoutes(route.routes)}</div>;
};

Layout.propTypes = {
  route: PropTypes.object
};

export default Layout;
