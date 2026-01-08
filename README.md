# 📇 Contact Management Web App (MERN)

A simple and modern **Contact Management Web Application** built using the **MERN stack**.
This project demonstrates core full-stack concepts including REST APIs, MongoDB integration, React state management, form validation, and responsive UI design.

---

## 🚀 Features

* Add new contacts with validation
* View contacts instantly without page reload
* Delete contacts
* Client-side form validation with error messages
* Responsive two-column layout (Form + Contact List)
* Modern UI with animations
* RESTful API integration
* MongoDB data persistence

---

## 🛠 Tech Stack

### Frontend

* React.js
* useState & useEffect
* CSS (modern, animated, responsive)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
contact-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.jsx
    │   │   └── ContactList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongodb://127.0.0.1:27017/contactDB
```

### 4️⃣ Run backend server

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 🌐 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/contacts`     | Add new contact    |
| GET    | `/api/contacts`     | Fetch all contacts |
| DELETE | `/api/contacts/:id` | Delete contact     |

---

## 🎨 Frontend Setup

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start frontend

```bash
npm run start
```

App will be available at:

```
http://localhost:5173
```

---

## 🧪 Validation Rules

* **Name**: Required
* **Phone**: Required
* **Email**: Must be valid 
* **Submit button** disabled if form is invalid

---

## 📱 Responsive Design

* Desktop: Two-column layout

  * Left → Add Contact
  * Right → Contact List
* Mobile: Stacked vertically
* Smooth animations & hover effects

---

## 🌟 Optional Enhancements Implemented

* Delete contact
* Animated UI transitions
* Reusable components
* Sorted contacts

---

## 📌 Future Improvements

* Search & filter contacts
* Edit contact feature
* Dark mode
* Authentication
* Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Prem Kumar**
Full-Stack Developer