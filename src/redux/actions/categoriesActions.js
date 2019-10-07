import { CATEGORIES_REQUEST_SUCCESS, CATEGORIES_REQUEST_ERROR } from '../actionTypes'

export const getCategories = (userUid) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  try {
    const categoriesSnapshot = await firestore.collection('categories').doc(userUid).get()
    const categories = await categoriesSnapshot.data()
    dispatch({ type: CATEGORIES_REQUEST_SUCCESS, payload: categories })
  } catch (err) {
    dispatch({ type: CATEGORIES_REQUEST_ERROR, err })
  }
}