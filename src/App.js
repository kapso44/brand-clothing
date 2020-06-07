import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/HomePage.component'
import Shop from './pages/shop/shop.component'
import LoginRegister from './pages/login-register/login-register.component'
import Checkout from './pages/checkout/checkout.component'
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionsForPreview } from './redux/collection/collection.selectors'

class App extends React.Component {

  unsubscribeFromAuth = null

  UNSAFE_componentWillMount() {
    const { setCurrentUser, collectionArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }

      setCurrentUser(userAuth);
      // addCollectionsAndDocuments('collections', collectionArray.map(({ title, items }) => ({ title, items })))
    });
  }

  UNSAFE_componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/login' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <LoginRegister />
              )
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
