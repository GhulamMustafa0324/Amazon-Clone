import React, { useEffect } from 'react';
import './App.css';
import Header from './comps/Header';
import Home from './comps/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './comps/Checkout';
import Login from './comps/Login';
import { auth } from './config/firebase'
import { useStateValue } from './config/StateProvider';
import Payment from './comps/Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('user =>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,

        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,

        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* <Route path='/payment' >
            <Header />
            <Payment />
          </Route> */}

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
