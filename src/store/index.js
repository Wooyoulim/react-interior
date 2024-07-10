import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './modules/gallerySlice';

export const store = configureStore({
    reducer: {
        galleryR: galleryReducer,
    },
});
