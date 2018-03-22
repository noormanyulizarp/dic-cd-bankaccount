import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import HomePage2 from './HomePage2';
import BankWallet from './BankWallet';

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Navbar/>
          <switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/homepage2" component={HomePage2}/>
          </switch>
          <Route path="/bankwallet" component={BankWallet}/>
        </div>
    );
  }
}

export default App;