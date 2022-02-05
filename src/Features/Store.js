import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Movies/MovieSlice'

// import rootReducer from './reducers'

export const store = configureStore({ reducer:movieReducer })