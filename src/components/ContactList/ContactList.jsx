import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div className={styles.contacts}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
