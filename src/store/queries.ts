import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './query-base';
import { deepEqual } from '@/utils';

import type { Pagination, Params, Image } from '@/types';
import { envs } from '@/config';

enum TagTypes {
  Image = 'Image',
  Images = 'Images'
}

const queries = createApi({
  baseQuery,
  tagTypes: Object.values(TagTypes),
  endpoints: (builder) => ({
    getImages: builder.query<Pagination<Image>, { search: string; params: Params }>({
      providesTags: (result) =>
        result?.hits
          ? [
              ...result.hits.map(({ id }) => ({
                type: TagTypes.Image,
                id
              })),
              TagTypes.Images
            ]
          : [TagTypes.Images],
      query: ({ search, params }) => {
        return {
          method: 'GET',
          url: 'https://pixabay.com/api',
          params: { ...params, safesearch: search, key: envs.app.apiKey }
        };
      },
      transformResponse: (response: Pagination<Image>) => {
        return { ...response, hits: [...response.hits.map((hint) => ({ ...hint, liked: false }))] };
      },
      serializeQueryArgs: ({ queryArgs }) => {
        const newQueryArgs = { ...queryArgs };

        if (newQueryArgs.params.page) {
          return { per_page: newQueryArgs.params.per_page };
        }

        return newQueryArgs;
      },
      merge: (currentCache, newItems, { arg }) => ({
        ...newItems,
        hits: arg.params.page > 1 ? [...currentCache.hits, ...newItems.hits] : newItems.hits
      }),
      forceRefetch({ currentArg, previousArg }) {
        if (!currentArg || !previousArg) {
          return false;
        }

        const {
          params: { page: nextPage },
          ...currentArgs
        } = currentArg;
        const {
          params: { page: previousPage },
          ...previousArgs
        } = previousArg;

        const serializedQueryArgsChanged = !deepEqual(currentArgs, previousArgs);

        if (serializedQueryArgsChanged) {
          return false;
        }

        return nextPage != previousPage;
      }
    })
  })
});

export default queries;
