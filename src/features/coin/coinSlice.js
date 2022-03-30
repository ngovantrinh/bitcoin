import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coniApi from '../../api/coinApi';

export const getCoint = createAsyncThunk('coin/getCoin', async (rate) => {
  const data = await coniApi.getAll(rate);
  return data;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    current: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getCoint.pending]: (state) => {
      state.loading = true;
    },
    [getCoint.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCoint.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = coinSlice.actions;

export default coinSlice.reducer;
