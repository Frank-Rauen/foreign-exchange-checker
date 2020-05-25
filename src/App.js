import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

//Reusables
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

//Pages
import Home from '../src/pages/Home/Home'
import Index from '../src/pages/Index/Index'
import Lookup from '../src/pages/Lookup/Lookup'
import Convert from '../src/pages/Convert/Convert'
import Comparison from '../src/pages/Comparison/Comparison'


class App extends Component {
  render() {
    return (
      <div className='app-outer-container'>
        <Navbar />

      <div className='app-inner-container'>
        <Switch>
          <Route exact path='/' render={props =>
          <Home />
        } />
          <Route exact path='/index' render={props =>
          <Index />
        } />
          <Route exact path='/lookup' render={props =>
          <Lookup />
        } />
        <Route exact path='/convert' render={props =>
          <Convert />
        } />
        <Route exact path='/comparison' render={props =>
          <Comparison />
        } />
        </Switch>
      </div>
      <Footer />
      </div>
    )
  }
}

export default App;
