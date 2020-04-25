import authReducer from './authReducer'
import lessonReducer from './lessonReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  lesson: lessonReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer