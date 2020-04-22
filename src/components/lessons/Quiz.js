import React, { Component } from 'react'
import Question from './Question'
import lessonContent from './LessonContent'
import { connect } from 'react-redux'

class Quiz extends Component {

  questionList = () => {
    const { lesson } = this.props
    const questionList = lessonContent[lesson].quiz.map( (_question, index) => {
      return <Question lesson={lesson} key={index} question_id={index} />
    })
    return questionList
  }

  render() {
    return(
      <div>
        <h5>Quiz</h5>
        {this.questionList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson
  }
}

export default connect(mapStateToProps)(Quiz)