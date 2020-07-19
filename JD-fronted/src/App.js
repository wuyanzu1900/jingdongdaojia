import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
// import Mine from './Mine';
// import Mine from './Mine/index'
// import Homepage from './components/homepage';
// import Find from './components/find';
import Mine from './components/Mine/index';
// import ShoppingCart from './componentsoppingCart';
// import Order from './components/order';

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path='/' component={Homepage} />
      <Route path='/find' component={Find} /> */}
      <Route path='/Mine' component={Mine} />
      {/* <Route path='oppingCart' component = {ShoppingCart} />
      <Route path = '/order' component = {Order} /> */}
      {/* <Redirect from = '/*' to = '/' /> */}
    </BrowserRouter>
  );
}

export default App;
