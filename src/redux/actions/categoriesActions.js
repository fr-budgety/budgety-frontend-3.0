import { CATEGORIES_REQUEST_SUCCESS, CATEGORIES_REQUEST_ERROR } from '../actionTypes'
import { handleLoader } from './loadingActions';

// Get categories from friebase
export const getCategories = (userUid) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  dispatch(handleLoader(true));
  try {
    const categoriesSnapshot = await firestore.collection('categories').doc(userUid).get()
    const categories = await categoriesSnapshot.data()
    const categoriesArray = reduceToArray(categories)
    dispatch(handleLoader(false));
    dispatch({ type: CATEGORIES_REQUEST_SUCCESS, payload: categoriesArray })
  } catch (err) {
    dispatch(handleLoader(false));
    dispatch({ type: CATEGORIES_REQUEST_ERROR, err })
  }
}

/**
 * Given an object of objects, reduce it to an array of objects and returns it
 * @param {object} objectOfObjects 
 * @returns {array}
 */
export const reduceToArray = (objectOfObjects) => Object.values(objectOfObjects)
