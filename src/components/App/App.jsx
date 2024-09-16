import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, SetContacts] = useState(() => {
    const savedContacts = localStorage.getItem("ContactsBase");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });
  useEffect(() => {
    localStorage.setItem("ContactsBase", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const HendleSubmit = (values, actions) => {
    SetContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: nanoid() },
    ]);
    actions.resetForm();
  };

  const deleteContact = (contactId) => {
    SetContacts((prevContcts) => {
      return prevContcts.filter((сontact) => сontact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm HendleSubmit={HendleSubmit} />
      <SearchBox 
        value={filter} 
        onFilter={setFilter} />
      <ContactList 
        contacts={filterContacts} 
        onDelete={deleteContact} />
    </div>
  );
}
