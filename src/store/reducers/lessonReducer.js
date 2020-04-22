const initState = { 
  lesson: 0 
}


const lessonReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_LESSON') {
    let newLesson = action.lesson
    return { lesson: newLesson }    
  }
  return state
}

export default lessonReducer