
import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actionTypes'

const initialState = {
  authError: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, authError: 'Login failed' }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer;