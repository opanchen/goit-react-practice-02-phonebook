import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI} from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
    reducer: {
        [contactsAPI.reducerPath]: contactsAPI.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(), 
        contactsAPI.middleware
    ],
})