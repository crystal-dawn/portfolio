import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
    <form className="contact-form" method="POST">
        <label className="contact-form-name" htmlFor="name">Name</label>
        <input className="contact-form-name" type="text" name="name" />

        <label className="contact-form-email" htmlFor="email">Email</label>
        <input className="contact-form-email" type="email" name="email" />

        <label className="contact-form-message" htmlFor="message">What's on your mind?</label>
        <textarea className="contact-form-message" name="message" rows="3"> </textarea>

        <input className="contact-form-submit" type="submit" />
        </form>
)

export default ContactForm;