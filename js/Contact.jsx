
import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened : false }; 
        this.change_state = this.change_state.bind(this);
    }

    change_state( state ) {
        this.setState({ opened: state });
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
                        <input type="submit" className="contact-submit"/>
                    </form>
                    <img src='./assets/close.svg' alt="Opened Contact Form Close Button" onClick = { () => this.change_state( !this.state.opened )} /> 
                </div>
            );

        } else {
            return(
                <div className="contact-form__closed" onClick={ () => this.change_state( !this.state.opened )} >
                    <img src='./assets/contact.png' alt="Contact Form Image" />
                </div>
            );
        }
    }
}

export default ContactForm;
