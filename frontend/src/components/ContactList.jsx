export default function ContactList({ contacts, onDelete, loading }) {
  if (loading) {
    return (
      <>
        <h2>Contacts</h2>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <div className="spinner" />
          <p style={{ marginTop: 8 }}>Loading contacts...</p>
        </div>
      </>
    );
  }

  if (contacts.length === 0) {
    return (
      <>
        <h2>Contacts</h2>
        <p>No contacts yet</p>
      </>
    );
  }

  return (
    <>
      <h2>Contacts</h2>

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
