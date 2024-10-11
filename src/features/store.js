import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  { authSlice } from './AuthSlice';
import { persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,

 } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}
let rootReducer = combineReducers(
  {
    auth: authSlice.reducer
  }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
  
// });
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
});

const persistor = persistStore(store);


export {store, persistor};








// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './AuthSlice'


// export default configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// })








