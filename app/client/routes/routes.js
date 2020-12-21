import React from 'react';
import Home from 'root/pages/Home';
import TabPanel from 'root/pages/TabPanel';
import Bank from 'root/pages/bank';
import GrandChild from 'root/pages/GrandChild';
import Layout from 'root/components/layout';
import { Redirect } from 'react-router-dom';

const PAGE_PRE_PATH = '/imgasst-web';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect from='/' to={`${PAGE_PRE_PATH}/`} />
  },
  {
    component: Layout,
    routes: [
      {
        path: `${PAGE_PRE_PATH}/`,
        exact: true,
        component: Home
      },
      {
        path: `${PAGE_PRE_PATH}/tabpanel`,
        component: TabPanel
      },
      {
        path: `${PAGE_PRE_PATH}/bank`,
        component: Bank,
        routes: [
          {
            path: `${PAGE_PRE_PATH}/bank/grand-child`,
            component: GrandChild
          }
        ]
      }
    ]
  }
];

export default routes;
