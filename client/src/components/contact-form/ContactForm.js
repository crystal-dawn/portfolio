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
                <form className="contact-form"
                    onSubmit={this.handleSubmit}
                >
                    <fieldset className="contact-form-fieldset">
                        <label htmlFor="name">Pleasure to meet you! What should I call you?</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            required
                        />
                    </fieldset>
                    <fieldset className="contact-form-fieldset textArea">
                        <label htmlFor="message">What's on your mind?</label>
                        <textarea
                            name="message"
                            onChange={this.handleChange}
                            required
                        />
                    </fieldset>
                    <fieldset className="contact-form-fieldset">
                        <label htmlFor="email">Where should I send a response?</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            required
                        />
                    </fieldset>
                    <input
                        className="contact-form-submit"
                        type="submit"
                    />
                </form>
            </div>
        );

    }
}

export default Contactform;
