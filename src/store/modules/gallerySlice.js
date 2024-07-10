import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const API = '43934478-a047dc1a61cd1dcae4818bed9';
export const getGallery = createAsyncThunk('gallery/getGallery', async (text) => {
    const res = await axios.get(
        `https://pixabay.com/api/?key=43934478-a047dc1a61cd1dcae4818bed9&q=${text}&image_type=photo`
    );
    return res.data.hits;
});

const initialState = {
    gallery: [],
    loading: true,
    text: 'flowers',
    info: null,
};

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        searchInput(state, action) {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        const { pending, fulfilled, rejected } = getGallery;
        builder
            .addCase(pending, (state, action) => {
                state.info = 'pending';
                state.loading = true;
            })
            .addCase(fulfilled, (state, action) => {
                state.info = 'fulfilled';
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(rejected, (state, action) => {
                state.info = 'rejected';
                state.loading = true;
            });
    },
});

export const { searchInput } = gallerySlice.actions;
export default gallerySlice.reducer;
