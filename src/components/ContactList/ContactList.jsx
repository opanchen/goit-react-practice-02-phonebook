import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import { createSelector } from '@reduxjs/toolkit';
import { ContactsItem } from './ContactsItem/ContactsItem';

export const ContactList = () => {


  // const { data:contacts, error, isLoading } = useGetContactsQuery();
  const { data:contacts } = useGetContactsQuery();
//  console.log(contacts);

  // const filter = useSelector(selectFilterValue);

  // const visibleContacts = useSelector(selectVisibleContacts);
  const selectVisibleContacts = createSelector(
    [selectFilterValue],
    (filter) => {
        const normalizedFilter = filter.toLowerCase();
        return (contacts || []).filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
  );

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css['contact-list']}>
        {visibleContacts.map((contact) => {
        const {name, phone, id} = contact;
        return (

          <ContactsItem 
            key={id}
            id={id}
            name={name}
            number={phone}
          />
      )}
      )}
    </ul>
  )
}