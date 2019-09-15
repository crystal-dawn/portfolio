import React, { Component } from 'react';
import ContactForm from './components/contact-form/ContactForm';
import Header from './components/header/Header';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <ContactForm />
            </>
        );

    }
}

export default App;
