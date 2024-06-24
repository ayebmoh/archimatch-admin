import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './features/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
  })
}