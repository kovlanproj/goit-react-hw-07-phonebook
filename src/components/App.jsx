import { AddContactForm } from './AddContactForm/AddContactForm';
import { Contacts } from './Contacts/Contacts';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <AddContactForm />
      <Contacts />
    </div>
  );
};
