import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            name={id}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
