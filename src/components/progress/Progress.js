import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Progress extends Component {

  render (){
    return (
      <div className="dashboard container">
        <div>First Name: </div><span>{}</span>
        <div>Last Name: </div><span>{}</span>
        <div>Completed Lesson: </div><span>{}</span>
        <div>Updated At: </div><span>{}</span>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    progress: state.firestore.ordered.progress
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'progress' }
  ])
)(Progress)
