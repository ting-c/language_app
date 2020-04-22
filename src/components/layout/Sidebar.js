import React , { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {

  handleClick = (event) => {
    this.props.changeLesson(parseInt(event.target.id))
  }

  render(){
    return (
      <div className="sidebar col s2 l1 light grey lighten-3">
        <ul className="lesson-list">
          <li id={0} onClick={this.handleClick}>Lesson 1</li>
          <li id={1} onClick={this.handleClick}>Lesson 2</li>
          <li>Lesson 3</li>
          <li>Lesson 4</li>
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