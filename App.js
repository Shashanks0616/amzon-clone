import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from './Header';
// import ReactDOM from 'react-dom'
import React from 'react'
import Home from './Home'
import Checkout from './Checkout';


function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path = "/Checkout">
         <Header/>
         <Checkout/>
       </Route>

       <Route path = "/login">
         <h1>Login Page</h1>
       </Route>

       <Route path = "/">
         <Header/>
         <Home/>
         
        
       </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
