import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

//Reusables
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

//Pages
import Index from '../src/pages/Index/Index'


class App extends Component {
  render() {
    return (
      <div className='app-outer-container'>
        <Navbar />

      <div className='app-inner-container'>
        <Switch>
          <Route exact path='/index' render={props =>
          <Index />
        } />
        </Switch>
      </div>
      <Footer />
      </div>
    )
  }
}

export default App;
