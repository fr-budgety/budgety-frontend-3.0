import { SHOW_LOADER, HIDE_LOADER } from '../actionTypes'

// Dispatch, show loader, hide loader
export const handleLoader = (isLoading = true) => dispatch => {
  if (isLoading) {
    dispatch({ type: SHOW_LOADER })
  } else {
    dispatch({ type: HIDE_LOADER })
  }
}
