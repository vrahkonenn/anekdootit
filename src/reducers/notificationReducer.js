import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state = initialState, action) {
			return action.payload
    }
  }
})

const { setNotification } = notificationSlice.actions

export const notificationSetter = (message, time) => {
  return async (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, time * 1000)
  }
}

export default notificationSlice.reducer