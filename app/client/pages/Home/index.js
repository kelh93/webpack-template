import React, { useState } from 'react';
import './index.css';
import pcIcon from 'root/media/imgs/pc@1x.png';
import utils from 'root/utils/constant';

const Home = (props) => {
  function toSelectPage() {
    console.log('utils.PAGE_PRE_PATH', utils.PAGE_PRE_PATH);
    console.log('utils.history', props.history);
    props.history.push(`${utils.PAGE_PRE_PATH}/tabpanel`);
  }

  return (
    <div className='container'>
      <ul className='list'>
        <li className='list_item'>
          <div className='item_box' onClick={toSelectPage}>
            <div className='img'>
              <img src={pcIcon} alt='电脑端选取' />
            </div>
            <div className='item_title'>电脑端选取</div>
          </div>
        </li>
        <li className='list_item'>
          <div className='item_box'>
            <div className='img'>
              <img src={pcIcon} alt='小程序选取' />
            </div>
            <div className='item_title'>暂未开放</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
