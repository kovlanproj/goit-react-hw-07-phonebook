import toast from 'react-hot-toast';
import { useAddContactMutation } from 'redux/contactsSlice';

export function AddContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const {
      elements: { name, phone },
    } = e.currentTarget;
    try {
      addContact({ name: name.value, phone: phone.value });
      toast.success('Contact added');
      e.currentTarget.reset();
    } catch (error) {
      toast.error('Error! Try again');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}
