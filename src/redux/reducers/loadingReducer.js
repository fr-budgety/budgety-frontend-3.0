
import { SHOW_LOADER, HIDE_LOADER } from '../actionTypes'

const initialState = false

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER: {
      return state = true
    }
    case HIDE_LOADER: {
      return state = false;
    }
    default:
      return state
  }
}

export default loadingReducer;