
import { CATEGORIES_REQUEST_ERROR, CATEGORIES_REQUEST_SUCCESS } from '../actionTypes'

const initialState = {
  categories: {},
  categoriesError: null
};
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST_SUCCESS:
      return { ...state, categories: action.payload }
    case CATEGORIES_REQUEST_ERROR:
      return {
        ...state,
        categoriesError: 'There is an error fetching your categories. Please try again later.'
      }
    default:
      return state
  }
}

export default categoriesReducer;