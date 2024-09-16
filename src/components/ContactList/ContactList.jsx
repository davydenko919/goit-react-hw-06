import Contact from "../Contact/Contact.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ value, onFilter, contacts, onDelete }) {

  return (
    <div className={css.contactList}>
      {/* <SearchBox value={value} onFilter={onFilter} /> */}
      {contacts.map((contact) => (
        <Contact 
          key={contact.id}
          data={contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
