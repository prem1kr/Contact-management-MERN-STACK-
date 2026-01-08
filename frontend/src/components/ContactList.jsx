export default function ContactList({ contacts, onDelete, loading }) {
  return (
    <>
      <h2>Contacts</h2>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <div className="spinner" />
          <p style={{ marginTop: 8 }}>Loading contacts...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && contacts.length === 0 && (
        <p>No contacts yet</p>
      )}

      {/* Contact List */}
      {!loading &&
        contacts.map(c => (
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
