import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createFilter from 'redux-persist-transform-filter';

import authReducer from './auth';
import emailReducer from './email';

const reducers = {
  auth: authReducer,
  email: emailReducer
};

// just store user and token from auth
const filterAuth = createFilter('auth', ['user', 'token']);

// Persistor Configuration to whitelist and blacklist any reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'email'],
  transforms: [filterAuth]
};
const persistedReducer = persistCombineReducers(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
