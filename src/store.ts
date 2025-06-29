import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./features/api/postsApi";
import { authApi } from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice";
import { commentsApi } from "./features/api/commentsApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,

    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(authApi.middleware).concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
