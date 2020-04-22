import React, { Component } from 'react'
import Lesson from '../lessons/Lesson'
import Quiz from '../lessons/Quiz'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import { updateProgress } from '../../store/actions/ProgressActions'

class Main extends Component {

  handleClick = () => {
    this.props.updateProgress(this.props.lesson)
  }

  render() {
    const { lesson } = this.props

    return(
      <div className='row'>

        <Sidebar lesson={lesson} /> 
        <div className="col s10 l11 container">
         
          <div className="section content">
            <Lesson lesson={lesson} />
          </div>
          <div className="divider"></div>

          <div className="section quiz">
            <Quiz lesson={lesson} />

          <div className="divider"></div>
          <button onClick={this.handleClick}>Completed</button>
        </div>

      </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProgress: (lesson) => dispatch(updateProgress(lesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)