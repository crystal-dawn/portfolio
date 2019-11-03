import React, { Component } from 'react';
import './ContactForm.css';

class Contactform extends Component {

    render() {
        return (
            <div className="contact-form-container">
                {/* Contact form supported by Formspree */}
                <form className="contact-form"
                    action=" https://formspree.io/crystalyungwirth@gmail.com"
                    method="POST"
                >
                    <fieldset className="contact-form-name-fieldset">
                    <legend className="contact-form-legend">Let's Chat!</legend>
                        <label
                            className="contact-form-label"
                            htmlFor="name">What should I call you?
                        <input
                            className="contact-form-name-input"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            required
                            />
                        </label>
                        <label
                            className="contact-form-label"
                            htmlFor="email">Where should I send a response?
                        <input
                            className="contact-form-email-input"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            required
                            />
                        </label>
                        <label
                            className="contact-form-label"
                            htmlFor="message">
                            What's on your mind?
                        <textarea
                            className="contact-form-message-textarea"
                            name="message"
                            rows={6}
                            onChange={this.handleChange}
                            required
                            />
                        </label>
                        <input
                            className="contact-form-submit"
                            type="submit"
                        />
                    </fieldset>
                </form>
            </div>
        );

    }
}

export default Contactform;
