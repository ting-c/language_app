import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const LoggedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/main'>Content</NavLink></li>
      <li><a href='/login' onClick={props.logout}>Log Out</a></li>      
      <li><NavLink to='/profile' className="btn btn-floating pink lighten-2">
      {props.profile.initials}
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks)