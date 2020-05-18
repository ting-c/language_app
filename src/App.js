import React, { Component } from 'react';
import "./App.scss";
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <HomePage />
        </div>      
    );
  }
}

export default App;
