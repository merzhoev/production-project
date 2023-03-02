import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, payload) {
      state.items = payload
    }
  },
})

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice