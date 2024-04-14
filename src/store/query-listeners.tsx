import type { Unsubscribe } from '@reduxjs/toolkit';
import queries from './queries';
import { startAppListening } from './query-store';

const notificationObserver = () => {
  let observerList: Unsubscribe[] = [];

  observerList.push(
    startAppListening({
      matcher: queries.endpoints.getImages.matchFulfilled,
      effect: async () => {
        console.log('List of images was successfully fetched!');
      }
    })
  );

  return () => {
    observerList.forEach((unsubscribe) => unsubscribe());
    observerList = [];
  };
};

export default notificationObserver;
