import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const GrandChild = (props) => {
  const { route } = props;
  return (
    <div>
      我是银行回单子路由
      {renderRoutes(route.routes, {
        someProp: 'these extra props are optional'
      })}
    </div>
  );
};

GrandChild.propTypes = {
  route: PropTypes.object
};

export default GrandChild;
