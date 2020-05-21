import React, { Component } from 'react';
import "./App.scss";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SkillPage from './pages/SkillPage/SkillPage';
import NumberSinoPage from './pages/lessons/number_sino/NumberSinoPage';
import NumberNativePage from './pages/lessons/number_native/NumberNativePage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/skill' component={SkillPage} />
          <Route exact path='/skill/number_sino' component={NumberSinoPage} />
          <Route exact path='/skill/number_native' component={NumberNativePage} />
        </div>      
    );
  };
};

export default App;
