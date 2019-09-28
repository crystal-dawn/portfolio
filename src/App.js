import React, { Component } from 'react';
import ContactForm from './components/contact-form/ContactForm';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                {/*<Projects />
                <ContactForm />*/}
            </div>
        );
    }
}

export default App;
