import React, { Component } from 'react';
import "./App.scss";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import OverviewPage from './pages/OverviewPage/OverviewPage';
import AlphabetSkillPage from './pages/Skillpage/alphabet/AlphabetSkillPage';
import NumberSkillPage from './pages/Skillpage/number/NumberSkillPage';
import BasicConsonantsPage from './pages/lessons/basic_consonants/BasicConsonantsPage';
import BasicVowelsPage from './pages/lessons/basic_vowels/BasicVowelsPage';
import DoubleVowelsPage from './pages/lessons/double_vowels/DoubleVowelsPage';
import NumberSinoPage from './pages/lessons/number_sino/NumberSinoPage';
import NumberNativePage from './pages/lessons/number_native/NumberNativePage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/overview' component={OverviewPage} />
          <Route exact path='/alphabet' component={AlphabetSkillPage} />
          <Route exact path='/number' component={NumberSkillPage} />
          <Route exact path='/alphabet/basic_consonants' component={BasicConsonantsPage} />
          <Route exact path='/alphabet/basic_vowels' component={BasicVowelsPage} />
          <Route exact path='/alphabet/double_vowels' component={DoubleVowelsPage} />
          <Route exact path='/number/number_sino' component={NumberSinoPage} />
          <Route exact path='/number/number_native' component={NumberNativePage} />
        </div>      
    );
  };
};

export default App;
