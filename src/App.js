import React, { Component } from 'react';
import "./App.scss";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import OverviewPage from './pages/OverviewPage/OverviewPage';
import AlphabetSkillPage from './pages/Skillpage/alphabet/AlphabetSkillPage';
import NumberSkillPage from './pages/Skillpage/number/NumberSkillPage';
import LessonPage from './pages/LessonPage/LessonPage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/overview' component={OverviewPage} />
          <Route exact path='/alphabet' component={AlphabetSkillPage} />
          <Route exact path='/number' component={NumberSkillPage} />
          <Route exact path='/lesson/:skill_id' component={LessonPage} />
        </div>      
    );
  };
};

export default App;
