import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReduser = filterSlice.reducer;

export const { searchFilter } = filterSlice.actions;
