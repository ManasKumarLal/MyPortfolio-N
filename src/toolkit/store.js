import { configureStore } from '@reduxjs/toolkit'
import showmoreSlice from './slices/showmore.slice.js'

export const store = configureStore({
  reducer: {
    showmoreSlice,
  },
})