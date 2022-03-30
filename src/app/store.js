import { configureStore } from '@reduxjs/toolkit';
import coinSlice from '../features/coin/coinSlice';

export const store = configureStore({
  reducer: {
    coin: coinSlice,
  },
});
