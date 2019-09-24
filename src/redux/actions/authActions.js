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

export const signUpWithGoogle = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}