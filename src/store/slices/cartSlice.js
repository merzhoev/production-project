import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cartProducts')) ?? [],
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
    removeAllProducts(state, action) {
      state.items = []
    },
    plusProduct(state, action) {
      const item = state.items.find(item => item.id === action.payload)

      item.amount += 1
      item.totalPrice += item.price
    },
    minusProduct(state, action) {
      const item = state.items.find(item => item.id === action.payload)

      item.amount -= 1
      item.totalPrice -= item.price
    }
  },
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice