import { combineReducers } from 'redux';
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import activityReducer from './slices/activitySlice';
import userReducer from './slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
}

const activityPersistConfig = {
  key: 'activity',
  storage: AsyncStorage,
  blackList: ['randomActivity']
}

const appReducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  activity: persistReducer(activityPersistConfig, activityReducer),
})

const rootReducers = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducers(state, action)
}
const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk, sagaMiddleware]
});


export const persistor = persistStore(store)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;