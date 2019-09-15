import React, { Component } from 'react';
import axios from 'axios';
import './ContactForm.css';
import honeyPot from './honey-svgrepo-com.svg';

class Contactform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state
        if (!name) return <div>Name must be complete"</div>
        // eslint-disable-next-line
        const form = await axios.post('/contact', {
            name, email, message
        })
    }

    render() {
        return (
            <div className="contact-form-container">
                <img
                    className="honey-pot"
                    src={honeyPot}
                    alt="honey pot"    
                />
                {/* Contact form supported by Formspree */}
                <form className="contact-form"
                    action=" https://formspree.io/crystalyungwirth@gmail.com"
                    method="POST"
                >
                    <fieldset className="contact-form-name-fieldset">
                        <label
                            className="contact-form-name-label"
                            htmlFor="name">
                            Pleasure to meet you! What should I call you?
                        <input
                            className="contact-form-name-input"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            required
                            />
                        </label>
                    </fieldset>
                    <fieldset className="contact-form-email-fieldset">
                        <label
                            className="contact-form-email-label"
                            htmlFor="email">Where should I send a response?
                        <input
                            className="contact-form-email-input"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            required
                            />
                        </label>
                    </fieldset>
                    <fieldset className="contact-form-message-fieldset">
                        <label
                            className="contact-form-message-label"
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
                    </fieldset>

                    <input
                        className="contact-form-submit-input"
                        type="submit"
                    />
                </form>
            </div>
        );

    }
}

export default Contactform;
