import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actionTypes'

import { toast } from 'react-toastify';
import { TOASTER_MESSAGES } from '../../utils/const/const.messages'
import { getCategories } from './categoriesActions';

import { defaultCategories } from '../../utils/categories/defaultCategories';
import { handleLoader } from './loadingActions';

/**
 * @function signIn - Get username, password, as string and dispatch login actions
 * @param {string} email
 * @param {string} password
 */
export const signIn = (email, password, history) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch(handleLoader(true));
  try {
    const signedInToken = await firebase.auth().signInWithEmailAndPassword(email, password);
    const seriealizedSignedInToken = await JSON.stringify(signedInToken);
    await localStorage.setItem('loggedIn', seriealizedSignedInToken);
    await dispatch(getCategories(signedInToken.user.uid));
    await dispatch({ type: LOGIN_SUCCESS })
    dispatch(handleLoader(false));
    await history.push('/user/dashboard')
    await toast(TOASTER_MESSAGES.loginSuccess);
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, err })
    dispatch(handleLoader(false));
  }
}

/**
 * @function signOut - Sign out
 */
export const signOut = (history) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch(handleLoader(true));
  try {
    await firebase.auth().signOut();
    await localStorage.clear('loggedIn');
    dispatch(handleLoader(false));
    await history.push('/')
    await toast(TOASTER_MESSAGES.signOut);
  } catch (err) {
    dispatch(handleLoader(false));
    throw (err)
  }
}

/**
 * @function signUp - Get username, password, as string and dispatch signup actions
 * @param {string} email
 * @param {string} password
 */
export const signUp = (email, password, history) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch(handleLoader(true));
  try {
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
    //User enrich email in user collection
    await firestore.collection('users').doc(resp.user.uid).set({ email })
    //User enrich default categories in categories collection
    await firestore.collection('categories').doc(resp.user.uid).set(defaultCategories)
    dispatch({ type: SIGNUP_SUCCESS })
    dispatch(handleLoader(false));
    await history.push('/')
    await toast(TOASTER_MESSAGES.registrationSuccess);
  } catch (err) {
    dispatch(handleLoader(false));
    dispatch({ type: SIGNUP_ERROR, err })
  }
}

/**
 * @function signInWithGoogle - Login with google provider
 */
export const signInWithGoogle = (history) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  dispatch(handleLoader(true));
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider)
    dispatch(handleLoader(false));
    history.push('/user/dashboard')
  } catch (err) {
    dispatch(handleLoader(false));
    dispatch({ type: SIGNUP_ERROR, err })
  }
}