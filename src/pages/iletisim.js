// src/pages/contact.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './contact.css';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        setFormStatus('İleti başarıyla gönderildi.');
      } else {
        setFormStatus('İleti gönderilirken bir hata oluştu.');
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      setFormStatus('İleti gönderilirken bir hata oluştu.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <Layout title="iletişim">
      <div className="contact-container">
        <div className="contact-form-section">
          <h1>iletişim</h1>
          <form 
            className="contact-form"
            action="https://webform.monocloud.com.tr/contact"
            method="POST"
            onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Adınız:</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="email">E-posta Adresiniz:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Konu:</label>
              <input type="text" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">İleti:</label>
              <textarea rows="10" name="message" required></textarea>
            </div>
            <button type="submit">İletiyi Gönder</button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;