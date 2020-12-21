import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.css';

const Bank = (props) => {
  const { route } = props;
  return (
    <div className='main'>
      <div className='main_top'>
        <Button className='scan_btn' type='primary' size='small'>
          启动扫描
        </Button>
        <Button className='local_btn' type='primary' size='small'>
          文件上传
        </Button>
      </div>
    </div>
  );
};

Bank.propTypes = {
  route: PropTypes.object
};

export default Bank;
