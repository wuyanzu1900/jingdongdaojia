import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Mine/header/Header'
import MineSwiper from '../components/Mine/MineSwiper/MineSwiper'
import More from '../components/Mine/more/More'
import Server from '../components/Mine/server/server'


export default [{
    component: Header,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to={"/recommend"} />
          },
          {
            path: '/recommend',
            component: Recommend
          },
        ]
      }
    ]
  }]