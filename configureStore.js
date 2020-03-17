import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './helper/reducers/index';

const persistConfig = {
    key: 'root',
    storage
  }
  
  export default (initialState = {}, history) => {
    const persistedReducer = persistReducer(persistConfig, makeRootReducer())
  
    const store = createStore(
      persistedReducer,
      initialState
    )
  
    const persistor = persistStore(store)
  
    return { store, persistor }
  }