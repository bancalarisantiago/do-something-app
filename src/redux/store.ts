import { combineReducers } from 'redux';
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
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

const rootReducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  activity: persistReducer(activityPersistConfig, activityReducer),
})

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