import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Progress extends Component {

  render (){
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/login' />

    return (
      <div className="dashboard container">
        <div>First Name: </div><span>{}</span>
        <div>Last Name: </div><span>{}</span>
        <div>Completed Lessons: </div><span>{}</span>
        <div>Updated At: </div><span>{}</span>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    progress: state.firestore.ordered.progress,
    auth: state.firebase.auth
  };
};

export default 
  compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'progress' }
    ])
  )(Progress)
