import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.items = payload
    },
  },
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice