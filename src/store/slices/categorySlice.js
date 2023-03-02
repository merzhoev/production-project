import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from 'services/api'

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => {
    const response = await $api.getCategories()
    return response.data
  }
)

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
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.items = action.payload.categories
      })
      .addCase(getCategories.rejected, (state, action) => {
      })
  },

})

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice