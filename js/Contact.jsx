
import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened : false }; 
    }

    render() {
        if( this.state.opened) {
            // Email, Subject, Message
            return(
                <div className="contact-form__opened">
                    <form name='contact' method='POST'>
                        <input type="email" placeholder="Email" />
                        <input type='text' placeholder="Subject" />
                        <textarea name="message" placeholder="Feel free to send me any message." />
                    </form>
                    <img src='' alt="Opened Contact Form Close Button" /> 
                </div>
            );

        } else {
            return(
                <div className="contact-form__closed">
                    <img src='./assets/contact.png' alt="Contact Form Image" />
                </div>
            );
        }
    }
}

export default ContactForm;
