import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.subject) errors.subject = "Subject is required.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const res = await axios.post("http://localhost:5000/api/contact", formData);
        setResponse(res.data.success);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setResponse(error.response?.data?.error || "An error occurred");
      }
    }
  };

  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">{response || "Thank you for your query! We'll get back to you soon."}</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Query Subject"
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit Query</button>
      </form>
    </div>
  );
};

export default ContactForm;
