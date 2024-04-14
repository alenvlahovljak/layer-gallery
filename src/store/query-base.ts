import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { envs } from '@/config';

type BaseQueryType = ReturnType<typeof fetchBaseQuery>;

function baseQuery(): BaseQueryType {
  return fetchBaseQuery({
    baseUrl: envs.app.apiUrl
  });
}

export default baseQuery();
