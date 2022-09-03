import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import activitiesReducer from './activitySlice';

const store = configureStore({
  reducer: {
    activity: activitiesReducer
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