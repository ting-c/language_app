import React, { Component } from 'react'
import Lesson from '../lessons/Lesson'
import Quiz from '../lessons/Quiz'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import { Redirect } from 'react-router-dom'

class Main extends Component {

  render() {
    const { lesson, auth } = this.props
    if (!auth.uid) return <Redirect to='/login' />
    return(
      <div className='row'>

        <Sidebar lesson={lesson} /> 
        <div className="main col s10 l11 container">
         
          <div className="section content">
            <Lesson lesson={lesson} />
          </div>
          <div className="divider"></div>

          <div className="section quiz">
            <Quiz lesson={lesson} />

          <div className="divider"></div>
          
        </div>

      </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Main)