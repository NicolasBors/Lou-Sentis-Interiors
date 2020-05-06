import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Contact.scss'

const Contact = () => {

    const [userCredentials, setCredentials] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const { name, email, subject, message } = userCredentials

    const handleChange = e => {
        const { value, name } = e.target

        setCredentials({ ...userCredentials, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axios({
            method: "POST",
            url: "http://localhost:5000/send",
            data: {
                name,
                email,
                subject,
                message
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message envoyé à Lou Sentis !");
                setCredentials({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } else if (response.data.status === 'fail') {
                alert("Erreur lors de l'envoi du message")
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="form-main">
            <div id="form-div">
                <h1 className='title'>CONTACT</h1>
                <div className='border'>
                    <span />
                </div>
                <form onSubmit={e => handleSubmit(e)}
                    method="POST"
                >
                    <p>
                        <input name="name" type="text" placeholder="Nom" value={name} required onChange={handleChange} />
                    </p>
                    <p>
                        <input name="email" type="email" placeholder="Email" value={email} required onChange={handleChange} />
                    </p>
                    <p>
                        <input name="subject" type="text" placeholder="Objet" value={subject} required onChange={handleChange} />
                    </p>
                    <p>
                        <textarea name="message" placeholder="Message" value={message} required onChange={handleChange}></textarea>
                    </p>
                    <div>
                        <input type="submit" value="ENVOYER" id="submit-button" />
                        <div id="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact