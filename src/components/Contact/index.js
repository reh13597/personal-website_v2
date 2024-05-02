import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('default_service', 'template_0gcoqzh', form.current, 'ZX4gaCCwYyqMgwaK2'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Name"
                                    required
                                />
                            </li>
                            <li className="half">
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Email"
                                    required
                                />
                            </li>
                            <li className="full">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input
                                    type="submit"
                                    value="SEND"
                                    className="flat-button"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact