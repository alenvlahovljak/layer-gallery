import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Image, Params } from '@/types';

type P = Omit<Params, 'key' | 'per_page'> & { search: string };

interface LikedImagesState {
  params: P;
  images: Image[];
}

const initialState = {
  params: { page: 1, search: '' },
  images: []
} satisfies LikedImagesState as LikedImagesState;

const likedImagesSlice = createSlice({
  name: 'likedImages',
  reducerPath: 'likedImages',
  initialState,
  reducers: {
    addImage(state, { payload }: PayloadAction<{ image: Image; params: P }>) {
      return {
        images: [...state.images, { ...payload.image, liked: true }],
        params: payload.params
      };
    },
    removeImage(state, { payload }: PayloadAction<number>) {
      return { ...state, images: state.images.filter(({ id }) => id != payload) };
    }
  }
});

export default likedImagesSlice;
