export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <h2>Contacts</h2>

      {contacts.length === 0 && <p>No contacts yet</p>}

      {contacts.map(c => (
        <div key={c._id} className="contact-item">
          <strong>{c.name}</strong> — {c.phone}
          <br />
          <small>{c.email}</small>

          <button onClick={() => onDelete(c._id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
