import React, { Component } from 'react';
import "./App.scss";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import LearnPage from './pages/LearnPage/LearnPage';
import SkillPage from './pages/SkillPage/SkillPage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/learn' component={LearnPage} />
          <Route exact path='/skill' component={SkillPage} />
        </div>      
    );
  }
}

export default App;
