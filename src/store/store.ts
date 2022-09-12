import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resetReducer from './resetTime-slice';
import colorReducer from './color-slice'
export const store = configureStore({
  reducer: {
    color:colorReducer,
    reset:resetReducer
  }
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store