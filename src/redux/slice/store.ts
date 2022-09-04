import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import activity from './activitySlice';

const store = configureStore({
  reducer: {
    activity
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store;