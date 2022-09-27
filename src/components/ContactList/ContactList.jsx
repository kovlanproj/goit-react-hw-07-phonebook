import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
