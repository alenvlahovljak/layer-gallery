import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  TypedStartListening
} from '@reduxjs/toolkit';
import { envs } from '@/config';
import queries from './queries';
import { likedImagesSlice } from './features';
import queryErrorLogger from './query-error-logger';

const rootReducer = combineReducers({
  [likedImagesSlice.reducerPath]: likedImagesSlice.reducer,
  [queries.reducerPath]: queries.reducer
});

const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening as TypedStartListening<
  RootState,
  AppDispatch
>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true
    })
      .prepend(listenerMiddleware.middleware)
      .concat([queries.middleware, queryErrorLogger]),
  devTools: !envs.isProduction
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { listenerMiddleware, startAppListening };
export type { RootState, AppDispatch };
