import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import projectsReducer from '../components/projects/projectsSlice';
import drawingsReducer from '../components/drawings/drawingsSlice';

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        drawings: drawingsReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;