import React, { useState, useEffect } from 'react';
import "./App.scss";
import { Route, Redirect } from 'react-router-dom';
import { firebaseAuth, firestore } from './firebase/firebase';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import OverviewPage from './pages/OverviewPage/OverviewPage';
import AlphabetSkillPage from './pages/Skillpage/alphabet/AlphabetSkillPage';
import NumberSkillPage from './pages/Skillpage/number/NumberSkillPage';
import LessonPage from './pages/LessonPage/LessonPage';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = firebaseAuth.onAuthStateChanged( user => {
        user ? setCurrentUser(user) : setCurrentUser(null)
    })
    return () => {
      unsubscribeFromAuth();
    }
  });

  console.log(currentUser);

  return (
      <div className="App">
        <NavBar {...{currentUser}} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin'>
          { currentUser ? <Redirect to='/overview' /> : <SignInAndSignUpPage />}
        </Route>
        <Route exact path='/overview' component={OverviewPage} />
        <Route exact path='/alphabet' component={AlphabetSkillPage} />
        <Route exact path='/number' component={NumberSkillPage} />
        <Route exact path='/lesson/:skill_id' component={LessonPage} />
      </div>      
  )
};

export default App;
