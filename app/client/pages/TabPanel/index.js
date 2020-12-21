import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.css';
import Bank from 'root/pages/Bank';

const TabPanel = (props) => {
  const { route } = props;
  return (
    <div className='container'>
      <div className='top'>
        <Button size='small' type='primary'>
          上传银行回单
        </Button>
      </div>
      <section className='bank'>
        <Bank />
      </section>
    </div>
  );
};

TabPanel.propTypes = {
  route: PropTypes.object
};

export default TabPanel;
