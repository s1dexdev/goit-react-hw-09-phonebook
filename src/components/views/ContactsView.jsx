import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import styles from './main.module.css';

const ContactsView = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>Phonebook</h1>
    <div className={styles.wrapper}>
      <div>
        <h2>Add contact</h2>
        <ContactForm />
      </div>

      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  </section>
);

export default ContactsView;
