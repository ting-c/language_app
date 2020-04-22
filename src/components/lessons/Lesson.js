import React, { Component } from 'react'
import lessonContent from './LessonContent'
import { connect } from 'react-redux'

class Lesson extends Component {

  render(){
    const { lesson } = this.props
    return(
      <div>
        <h4 className="lesson-number">Lesson {lesson+1}</h4>
        <h4 className="lesson-title">{lessonContent[lesson].title}</h4>
        <p>{lessonContent[lesson].content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson
  }
}

export default connect(mapStateToProps)(Lesson)