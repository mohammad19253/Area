import { configureStore,getDefaultMiddleware,combineReducers  } from '@reduxjs/toolkit'

import authorizationReducer from '../features/athurization/authorizationSlice'
import mapReducer from '../features/map/mapSlice'
import UserReducer from '../features/User/user'


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' 
const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  map: mapReducer,
  authorization:authorizationReducer,
  user:UserReducer,
});

//   map: mapReducer,
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
  }),
  devTools: process.env.NODE_ENV !== 'production',
});