export const login = ({ credentials, firebase }) => (dispatch, getState) => {
  firebase.auth().loginWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

export const logout = firebase => (dispatch, getState) => {
  firebase.auth().logout().then(() => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  });
};

export const signUp = (newUser, firebase) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  )
    .then(resp => firestore.collection('users').doc(resp.user.uid).set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: `${newUser.firstName[0]}${newUser.lastName[0]}`,
    }))
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
};