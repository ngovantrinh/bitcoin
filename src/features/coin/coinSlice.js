import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coniApi from '../../api/coinApi';

export const getCoint = createAsyncThunk('coin/getCoin', async (params) => {
  try {
    const data = await coniApi.getAll(params);
    return data;
  } catch (error) {
    console.log({ error });
  }
});

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    current: [],
    loading: true,
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
