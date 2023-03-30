import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

initialState = {
    prjects: [],
    projectsLoadingStatus: 'idle'
};

const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    () => {
        const request = () => {};
        return request('');
    }
)

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        moreProjectsload(state) {
            state.projectsLoadingStatus = 'loading';
        },
        moreProjectsloaded(state, action) {
            state.projectsLoadingStatus = 'loading';
            state.prjects.concat(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, state => {state.projectsLoadingStatus = 'loading'})
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.projectsLoadingStatus = 'idle';
                state.prjects = action.payload
            })
            .addCase(fetchProjects.rejected, state => {state.projectsLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

export default counterSlice.reducer;
export const { projectsFetching, projectsFetched, projectsFetchingError } = counterSlice.actions;