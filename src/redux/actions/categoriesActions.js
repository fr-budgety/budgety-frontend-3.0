import { CATEGORIES_REQUEST_SUCCESS, CATEGORIES_REQUEST_ERROR } from '../actionTypes'

export const getCategories = (userUid) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  try {
    const categories = await firestore.collection('categories').doc(userUid).get()
    console.log(categories._document.fields)
    dispatch({ type: CATEGORIES_REQUEST_SUCCESS, payload: categories })
  } catch (err) {
    dispatch({ type: CATEGORIES_REQUEST_ERROR, err })
  }
}