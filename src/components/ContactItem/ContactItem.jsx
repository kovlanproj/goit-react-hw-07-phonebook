import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li>
      {name} - {phone} -{' '}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
};
