import { SHOW_TOASTER } from '../actionTypes';
const initialState = []

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOASTER: {
      state = [
        ...state,
        action.payload
      ]
      break;
    }
    default:
      return state
  }
}

export default toastReducer