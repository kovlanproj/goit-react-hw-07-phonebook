import ClipLoader from 'react-spinners/ClipLoader';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import styles from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li className={styles.list}>
      <div className={styles.contacts}>
        <span>{name}</span>
        <span className={styles.phone}>{phone}</span>
      </div>

      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        className={styles.button}
      >
        {isDeleting && <ClipLoader color="#464646" size={12} />}
        Delete
      </button>
    </li>
  );
};
