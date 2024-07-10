import React, { useState } from "react";
import "./App.css"; // Import your CSS file here

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contacts: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName)
      newErrors.firstName = "Please enter your first name!";
    if (!formData.lastName) newErrors.lastName = "Please enter your last name!";
    if (!formData.email) newErrors.email = "Please enter your email!";
    if (!formData.contacts) newErrors.contacts = "Please enter your contacts!";
    else if (formData.contacts.length !== 10)
      newErrors.contacts = "Invalid number! Phone number must be 10 digits.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Registration successful!");
      setErrors({});
    }
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Contacts:</label>
          <input
            type="text"
            name="contacts"
            value={formData.contacts}
            onChange={handleChange}
          />
          {errors.contacts && <p className="error">{errors.contacts}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
