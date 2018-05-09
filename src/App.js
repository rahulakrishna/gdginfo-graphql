import React, { Component } from 'react';
import './App.css';
import OrganisationInfo from './components/OrganisationInfo';
import Recent from './components/Recent';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path ='/' render={()=><OrganisationInfo organisation="GDGVIT"/>}/>
        <Route exact path ='/recent' render={()=><Recent/>}/>
      </div>
    );
  }
}

export default App;
