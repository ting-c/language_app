import React from 'react'
import { Link } from 'react-router-dom'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />
  return (
    <nav className="nav-wrapper purple lighten-1">
      <div className="container">
        <Link to='/main' className="left brand-logo">KoreanApp</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)