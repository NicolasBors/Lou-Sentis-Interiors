import React, { useState, useEffect } from 'react'
import './css/ContactForm.css'
import axios from 'axios'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                name,
                mail,
                subject,
                message
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message envoyé à Lou Sentis !");
                setName('')
                setMail('')
                setSubject('')
                setMessage('')
            } else if (response.data.status === 'fail') {
                alert("Erreur lors de l'envoi du message")
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="contact-form-main">
            <div id="contact-form-div">
                <h1 className='contact-title'>CONTACT</h1>
                <div className='contact-border-container'>
                    <p className='contact-border'></p>
                </div>
                <form className="contact-form" id="contact-form1" onSubmit={e => handleSubmit(e)}
                    method="POST"
                >
                    <p className="contact-name">
                        <input name="name" type="text" className="contact-feedback-input" placeholder="Nom" id="contact-name" value={name} onChange={e => setName(e.target.value)} />
                    </p>
                    <p className="contact-email">
                        <input name="email" type="email" className="contact-feedback-input" id="contact-email" placeholder="Email" value={mail} onChange={e => setMail(e.target.value)} />
                    </p>
                    <p className="contact-object">
                        <input name="object" type="text" className="contact-feedback-input" placeholder="Objet" id="contact-object" value={subject} onChange={e => setSubject(e.target.value)} />
                    </p>
                    <p className="text">
                        <textarea name="text" className="contact-feedback-input" id="contact-comment" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
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