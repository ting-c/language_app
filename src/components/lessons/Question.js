import React, { Component } from 'react'
import lessonContent from './LessonContent'
import Choices from './Choices'
import { connect } from 'react-redux'

class Question extends Component {
  state = {
    question_id: this.props.question_id
  }

  displayQuestion = () => {
    const { lesson } = this.props;
    const { question_id } = this.state;
    return lessonContent[lesson].quiz[question_id].question
  }
  
  render() {
    const { question_id } = this.state;
    return (
      <div className="question-block">
        <span>{question_id + 1}</span>. <span className="question">{this.displayQuestion()}</span>
        <Choices key={this.state.question_id} question_id={question_id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson
  }
}

export default connect(mapStateToProps)(Question)

