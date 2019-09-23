export const signIn = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' })
  }).catch(err => {
    dispatch({ type: 'LOGIN_ERROR', err })
  })
}

export const signUp = (email, password) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        email
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
}