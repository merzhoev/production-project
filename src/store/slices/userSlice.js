import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $api } from "services/api";


export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await $api.getUser();
  return response.data;
});

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        // console.log('pending', action)
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload.user
      })
      .addCase(getUser.rejected, (state, action) => {
        // console.log('rejected', action)
      });
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
