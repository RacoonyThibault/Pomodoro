import { configureStore } from "@reduxjs/toolkit";
import chrono from "./features/chrono";

export const store = configureStore({
  reducer: {
    chrono,
  },
});
// Typage du RootState pour représenter l'état global
export type RootState = ReturnType<typeof store.getState>;

// Typage du dispatch pour utiliser Redux Thunks ou autres middlewares
export type AppDispatch = typeof store.dispatch;
