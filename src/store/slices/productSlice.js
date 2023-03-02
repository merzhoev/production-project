import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.items = payload
    },
  },
})

export const { reducer: productReducer, actions: productActions } = productSlice