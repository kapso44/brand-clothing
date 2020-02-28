import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/HomePage.component'
import Shop from './pages/shop/shop.component'
import LoginRegister from './pages/login-register/login-register.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  UNSAFE_componentWillMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {console.log(this.state)});
        });
      }
      this.setState({ currentUser: userAuth }); 

    });
  }

  UNSAFE_componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/login' component={LoginRegister}/>
        </Switch>
      </div>
    );
  }
}

export default App;
