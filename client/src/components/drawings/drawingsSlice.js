import { createSlice } from '@reduxjs/toolkit';

const drawingsSlice = createSlice({
    name: 'drawings',
    initialState: {
        list: [],
        currentDrawingUrn: ''
    },
    reducers: {
        updateDrawings(state, action) {
            state.list = action.payload;
        },
        setCurrentDrawingUrn(state, action) {
            state.currentDrawingUrn = action.payload
        }
    }
});

export const { updateDrawings, setCurrentDrawingUrn } = drawingsSlice.actions;
export default drawingsSlice.reducer;