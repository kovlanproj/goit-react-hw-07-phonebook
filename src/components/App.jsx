import { Toaster } from 'react-hot-toast';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Contacts } from './Contacts/Contacts';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <AddContactForm />
      <Contacts />
      <Toaster position="top-right" />
    </div>
  );
};
