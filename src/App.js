import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Main from './components/layout/Main'
import Profile from './components/layout/Profile'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path='/'/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/main' component={Main} />
            <Route path='/profile' component={Profile} />
          </Switch>

        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
