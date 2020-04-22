const initState = {
  progress: 0
}

const progressReducer = (state = initState, action) => {
  switch (action.type){
    case 'UPDATE_PROGRESS':
      console.log('updated progress', action.project)
      return state;
    case 'UPDATE_PROGRESS_ERROR':
      console.log('updated progress error', action.err);
      return state;
    default: 
      return state;
  }
}

export default progressReducer