import React, { useEffect } from "react"
import './App.css';
import './Header.css';
import Home from './Home'
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { auth } from './firebase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const promise = loadStripe("pk_test_51H1G4ILxHDAMC9kjMADC9CcMykggrn0yTRio9rEWlEFNBSWKgZeL8HnNrAbPJlJCwMmdVKcRX7NL4D63HPm7PdaL000Yh4O4Ga");


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>', authUser)

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path = "/orders"> 
           <Header />
           <Orders />
        </Route>
        <Route path = "/checkout"> 
           <Header />
           <Checkout />
          </Route>
          <Route path = "/login"> 
            <Login />
          </Route>
          <Route path = "/payment"> 
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path = "/" > 
            <Header />          
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
