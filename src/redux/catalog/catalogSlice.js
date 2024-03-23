import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getCampersById } from './operations';

const initialState = {
  campers: [],
  camperById: {},
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCampersById.fulfilled, (state, action) => {
        state.camperById = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
