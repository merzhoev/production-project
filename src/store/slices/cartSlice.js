import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items.push(action.payload)
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // incrementProduct(state, payload) {
    //   state.items = state.items.map((item) =>  (item.amount + 1))
    // },
    // decrementProduct(state, payload) {
    //   state.items = state.items.filter((id) => id === payload)
    // },
  },
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice

// dispatchEvent(cartActions.setProducts({}))