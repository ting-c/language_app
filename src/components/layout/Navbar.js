import React from 'react'
import { Link } from 'react-router-dom'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className="nav-wrapper purple lighten-1">
      <div className="container">
        <Link to='/' className="left brand-logo">KoreanApp</Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    
  }
}

export default connect(mapStateToProps)(Navbar)