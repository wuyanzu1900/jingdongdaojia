import React, { useReducer, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Redirect, } from 'react-router-dom'
import Homepage from './components/homepage';
// import Find from './components/find';
import Mine from './components/Mine';
// import ShoppingCart from './components/shoppingCart';
// import Order from './components/order';
import ChannelPageType from './components/homepage/channelPageType/ChannelPageType';
import MineMessage from './components/Mine/header/minemessage/MineMessage';
import ProfilePhoto from './components/Mine/header/profilephoto/ProfilePhoto'
import MessageChange from './components/Mine/header/messagechange/MessageChange'
import MineWallet from './components/Mine/header/minewallet/MineWallet'
import MineRedPacket from './components/Mine/header/mineredpacket/MineRedPacket'

function App() {

  return (
    <HashRouter>
      <Route exact path='/' component={Homepage} />
      {/* <Route path='/find' component={Find} /> */}
      <Route path='/mine' component={Mine} />
      <Route path='/minemessage' component={MineMessage} />
      <Route path='/profilephoto' component={ProfilePhoto} />
      <Route path='/messagechange' component={MessageChange} />
      <Route path='/minewallet' component={MineWallet} />
      <Route path='/mineredpacket' component={MineRedPacket} />
      {/* <Route path='/shoppingCart' component = {ShoppingCart} /> */}
      {/* <Route path = '/order' component = {Order} /> */}
      <Route path='/channelPage/:type' component={ChannelPageType} />
      <Redirect from='/*' to='/' />
    </HashRouter>
  );
}

export default App;
