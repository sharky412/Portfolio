import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container my-5 p-4 contact-section">
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        Contact
      </h2>
      <p className="d-flex justify-content-center align-items-center">
        Email me at: <a href="mailto:keershardul@gmail.com" className="ms-2">keershardul@gmail.com</a>
      </p>
      <p className="d-flex justify-content-center align-items-center">
        Message me on LinkedIn: 
        <a href="https://www.linkedin.com/in/shardul-keer-7713b7228/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="ms-2">
          LinkedIn Profile
        </a>
      </p>
    </section>
  );
};

export default Contact;
