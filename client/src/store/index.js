import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        projects: projectsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;