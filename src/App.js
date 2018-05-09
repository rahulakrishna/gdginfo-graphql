import React, { Component } from 'react';
import './App.css';
import OrganisationInfo from './components/OrganisationInfo';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <OrganisationInfo organisation="GDGVIT"/>
      </div>
    );
  }
}

export default App;
