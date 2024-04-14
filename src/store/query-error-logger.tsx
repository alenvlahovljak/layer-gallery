import { isRejectedWithValue, Middleware, PayloadAction } from '@reduxjs/toolkit';
import { envs } from '@/config';
import type { ErrorResponse } from '@/types';

const queryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (!envs.isProduction) {
      console.log({ action });
      console.warn('We got a rejected action!');
    }

    const { payload } = action as PayloadAction<{ status: number; data: ErrorResponse }>;

    if (payload.data?.status) {
      console.error({ [payload.status]: payload.data.description });
    }
  }

  return next(action);
};

export default queryErrorLogger;
