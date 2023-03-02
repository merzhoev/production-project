import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { cartReducer } from './slices/cartSlice'
import { categoryReducer } from './slices/categorySlice'
import { productReducer } from './slices/productSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    product: productReducer,
  },
})