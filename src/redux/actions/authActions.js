import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actionTypes'
import history from './history'

/**
 * @function signIn - Get username, password, as string and dispatch login actions
 * @param {string} email
 * @param {string} password
 */
export const signIn = (email, password) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    await dispatch({ type: LOGIN_SUCCESS })
    history.push('/user/dashboard')
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, err })
  }
}

/**
 * @function signOut - Sign out
 */
export const signOut = () => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    throw (err)
  }
}

/**
 * @function signUp - Get username, password, as string and dispatch signup actions
 * @param {string} email
 * @param {string} password
 */
export const signUp = (email, password) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firestore.collection('users').doc(resp.user.uid).set({ email })
    dispatch({ type: SIGNUP_SUCCESS })
    history.push('/auth/login')
  } catch (err) {
    dispatch({ type: SIGNUP_ERROR, err })
  }
}

/**
 * @function signInWithGoogle - Login with google provider
 */
export const signInWithGoogle = () => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider)
  } catch (err) {
    dispatch({ type: SIGNUP_ERROR, err })
  }
}