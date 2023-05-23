import { useDeleteContactMutation } from 'redux/contactsSlice';
import css from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import { Loader } from 'components';

export const ContactsItem = ({id, name, number}) => {

    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    const handleDeleteContact = (id) => {
        deleteContact(id);
      }

    return (
        <li className={css['contact-item']} key={id}>
        <p className={css['contact-text']}>
          <span className={css['contact-name']}>{name}:</span> {number}
        </p>
        <button
          className={isLoading ? css['disabled'] : css['delete-btn']} 
          type="button" 
          onClick={() => handleDeleteContact(id)}
          disabled={isLoading}
        >
         {isLoading ? <Loader size={16}/> : 'Delete'}
        </button>
      </li>
    )
}

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}