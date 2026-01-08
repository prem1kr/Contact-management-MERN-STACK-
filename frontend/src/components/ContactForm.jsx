import { useState } from "react";

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name required";
    if (!form.phone) err.phone = "Phone required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(
        "https://contact-management-backend-jzpk.onrender.com/api/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();
      onAdd(data);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      alert("Failed to add contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        disabled={loading}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        disabled={loading}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        disabled={loading}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        disabled={loading}
      />

      <button disabled={loading || !form.name || !form.phone}>
        {loading ? <div className="spinner" /> : "Submit"}
      </button>
    </form>
  );
}
