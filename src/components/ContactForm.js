import React, { useState } from 'react'
import './css/ContactForm.css'
import axios from 'axios'

const ContactForm = props => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:3000",
            data: mail
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    return (
        <div id="contact-form-main" className={`${props.content ? 'visible-content' : 'hidden-content'}`}>
            <div id="contact-form-div">
                <h1 className='contact-title'>CONTACT</h1>
                <div className='contact-border-container'>
                    <p className='contact-border'></p>
                </div>
                <form className="contact-form" id="contact-form1" onSubmit={handleSubmit} method="POST">

                    <p className="contact-name">
                        <input name="name" type="text" className="contact-feedback-input" placeholder="Nom" id="contact-name" onChange={e => setName(e.target.value)} />
                    </p>

                    <p className="contact-email">
                        <input name="email" type="email" className="contact-feedback-input" id="contact-email" placeholder="Email" onChange={e => setMail(e.target.value)} />
                    </p>

                    <p className="contact-object">
                        <input name="object" type="text" className="contact-feedback-input" placeholder="Objet" id="contact-object" onChange={e => setObject(e.target.value)} />
                    </p>

                    <p className="text">
                        <textarea name="text" className="contact-feedback-input" id="contact-comment" placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
                    </p>


                    <div className="contact-submit">
                        <input type="submit" value="ENVOYER" id="contact-button" />
                        <div className="contact-ease"></div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm