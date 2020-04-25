import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Profile = (props) => {
  const { userId, profile } = props
  if (!userId) return <Redirect to='/login' />

  if (!profile) return null
  const userProfile = profile[userId]
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey lighten-2">
          <div className="card-content white-text">
            <span className="card-title center">
              Profile
            </span><br/>
            <div className="card-title"> 
            Name: {userProfile.firstName} {userProfile.lastName}
            </div>            
          </div>          
        </div>
      </div>
    </div>
  )
  
}

const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
    profile: state.firestore.data.users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'users'}
  ]))
  (Profile)