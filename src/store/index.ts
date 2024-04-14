import notificationObserver from './query-listeners';
import { store, listenerMiddleware, AppDispatch, RootState } from './query-store';
import queries from './queries';

export const { useGetImagesQuery } = queries;

export default store;
export { listenerMiddleware, notificationObserver };
export type { AppDispatch, RootState };
