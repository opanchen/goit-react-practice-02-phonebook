// import { createSelector } from "@reduxjs/toolkit";
// import { useGetContactsQuery } from "./contactsSlice";

export const selectFilterValue = (state) => state.filter;

// export const selectContacts = (state) => state.contacts.items;
// export const selectIsLoading = (state) => state.contacts.isLoading;
// export const selectError = (state) => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//     [selectContacts, selectFilterValue],
//     (contacts, filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//     }
// );

// const {data: contacts} = useGetContactsQuery()

// export const selectVisibleContacts = createSelector(
//     [selectFilterValue],
//     (filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//     }
// );