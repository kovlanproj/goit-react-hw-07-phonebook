import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  return (
    <div>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </div>
  );
};
