import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/HomePage.component'
import Shop from './pages/shop/shop.component'
import LoginRegister from './pages/login-register/login-register.component'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/login' component={LoginRegister}/>
      </Switch>
    </div>
  );
}

export default App;
