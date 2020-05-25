import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

//Reusables
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className='app-outer-container'>
        <Navbar />

      <div className='app-inner-container'>]
      </div>
      <Footer />
      </div>
    )
  }
}

export default App;
