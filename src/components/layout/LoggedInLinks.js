import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const LoggedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/progress'>Progress</NavLink></li>
      <li><a href='/' onClick={props.logout}>Log out</a></li>
      <li><NavLink to='/' className="btn btn-floating pink lighten-2">TC</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks)