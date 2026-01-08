import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(
          "https://contact-management-backend-jzpk.onrender.com/api/contacts"
        );
        const data = await res.json();
        setContacts(data);
      } catch {
        alert("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const addContact = (contact) => {
    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = async (id) => {
    await fetch(
      `https://contact-management-backend-jzpk.onrender.com/api/contacts/${id}`,
      { method: "DELETE" }
    );
    setContacts(prev => prev.filter(c => c._id !== id));
  };

  return (
    <div className="layout">
      <div className="card form-card">
        <ContactForm onAdd={addContact} />
      </div>

      <div className="card list-card">
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          loading={loading}
        />
      </div>
    </div>
  );
}
