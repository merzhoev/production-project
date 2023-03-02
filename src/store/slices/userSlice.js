import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, payload) {
      state.user = payload
    },
    removeUser(state) {
      state.user = null
    }
  },
})

export const { reducer: userReducer, actions: userActions } = userSlice