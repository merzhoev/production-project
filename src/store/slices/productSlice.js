import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from 'services/api'

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (params) => {
    const response = await $api.getProducts(params)
    return response.data
  }
)

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
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload.products
      })
      .addCase(getProducts.rejected, (state, action) => {
      })
  },
})

export const { reducer: productReducer, actions: productActions } = productSlice
