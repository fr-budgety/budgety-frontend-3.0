
const initialState = {
  authError: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login failed' }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
  }
  return state;
}

export default authReducer;