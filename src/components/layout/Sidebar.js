import React , { Component } from 'react'
import { connect } from 'react-redux'
import lessonContent from '../lessons/LessonContent'

class Sidebar extends Component {

  handleClick = (event) => {
    this.props.changeLesson(parseInt(event.target.id))
  }

  render(){
    const lessonList = lessonContent.map((lesson, index) => {
      return <li id={index} key={index} onClick={this.handleClick}> Lesson {index + 1} </li>
    });
    return (
      <div className="sidebar col s2 l1">
        <ul className="lesson-list">
          {lessonList}
        </ul>
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
    changeLesson: (lesson) => { dispatch({ type: 'CHANGE_LESSON', lesson: lesson }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)