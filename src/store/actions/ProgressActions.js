export const updateProgress = (lesson) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    firestore.collection('progress').add({
      firstName: 'T',
      lastName: 'C',
      lesson: lesson,
      createdAt: new Date()
      
    }).then(() => {
    dispatch({ type: 'UPDATE_PROGRESS', lesson });
    }).catch((err) => {
      dispatch({ type: 'UPDATE_PROGRESS_ERROR', err });
    })
  }
}