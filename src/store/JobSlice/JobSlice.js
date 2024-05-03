
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    data: null
};

export const fetchSampleData = createAsyncThunk(
    'job/fetchSampleData',
    async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": 100,
                "offset": 0
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            return response.json();
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
);

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSampleData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSampleData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSampleData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default jobSlice.reducer;
