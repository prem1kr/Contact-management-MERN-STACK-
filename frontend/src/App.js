import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(setContacts);
  }, []);

  const addContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE"
    });
    setContacts(contacts.filter(c => c._id !== id));
  };

  return (
    <div className="layout">
  <div className="card form-card">
    <ContactForm onAdd={addContact} />
  </div>

  <div className="card list-card">
    <ContactList contacts={contacts} onDelete={deleteContact} />
  </div>
</div>


  );
}
