// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: false },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
