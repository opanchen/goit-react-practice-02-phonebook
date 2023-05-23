import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://646420ce127ad0b8f8981ed4.mockapi.io/api/v1';

export const contactsAPI = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: ({name, number}) => ({
                url: `/contacts`,
                method: 'POST',
                body: {name, phone:number},
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        })
    }),

})








export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsAPI;


// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";

// const handlePending = (state) => {
//     state.isLoading = true;
// }

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// }

// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },

//     extraReducers: {
//         [fetchContacts.pending]: handlePending,
//         [fetchContacts.rejected]: handleRejected,
//         [fetchContacts.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },

//         [addContact.pending]: handlePending,
//         [addContact.rejected]: handleRejected,
//         [addContact.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;
//             state.items.push(action.payload);
//         },

//         [deleteContact.pending]: handlePending,
//         [deleteContact.rejected]: handleRejected,
//         [deleteContact.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;

//             const index = state.items.findIndex(
//                 contact => contact.id === action.payload.id
//             );
//             state.items.splice(index, 1);

//         },
//     }
// });