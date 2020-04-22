import React, { Component } from 'react'
import lessonContent from './LessonContent'
import { connect } from 'react-redux'

class Choices extends Component {
  state = {
    question_id: this.props.question_id,
    answer: null,
    result: null
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        ...this.state,
        question_id: this.props.question_id
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      answer: event.target.value
    });
  }

  handleCheck = () => {
    const { lesson } = this.props
    if (this.state.answer === lessonContent[lesson].quiz[this.state.question_id].answer) {
      this.setState({
        ...this.state,
        result: "✔"
      });
    } else {
      this.setState({
        ...this.state,
        result: "✘"
      });
    }
  }

  checkAnswer = (event) => {
    event.preventDefault();
    const { lesson } = this.props
    if (this.state.answer === lessonContent[lesson].quiz[this.state.question_id].answer) {
      this.handleCheck()
    } else {
      this.handleCheck()
    };
  };

  displayChoice = (choice) => {
    return (
      <p key={choice}>
        <label>
          <input name="question" type="radio" value={choice} onChange={this.handleChange} />
          <span>{choice}</span>
        </label>
      </p>
    )
  }

  choicesList = () => {
  const { lesson } = this.props;
   const list = lessonContent[lesson].quiz[this.state.question_id]
  .choices.map(choice => {
    return this.displayChoice(choice)
  })
  return list
}

  render() {
    return (
      <form onSubmit={this.checkAnswer}>
        {this.choicesList()}
        <button>Check</button>
        <span className="check-symbol">{this.state.result}</span>
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson
  }
}

export default connect(mapStateToProps)(Choices)