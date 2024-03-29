import React, { useState } from "react";
import { emailVal } from "../../utils/helpers";

export default function Contact() {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailMissingError, setEmailMissingError] = useState('')
    const [nameMissingError, setNameMissingError] = useState('')
    const [messageMissingError, setMessagetMissingError] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    
    const handleMissingCells = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            if (!inputValue) {
                setNameMissingError('Please input a name')
            } else {
                setNameMissingError('')
            }
        } else if (inputType === 'email') {
            if (!inputValue) {
                setEmailMissingError('Please input an email')
            } else {
                setEmailMissingError('')
            }
        } else if (inputType === 'message') {
            if (!inputValue) {
                setMessagetMissingError('Please input a message')
            } else {
                setMessagetMissingError('')
            }
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!emailVal(email)) {
            setErrorMessage('Please input a vaild email');
            return;
        } 
        if(!name) {
            setErrorMessage('Please input a valid name');
            return;
        }
        if(!message) {
            setErrorMessage('Please input a vaild message');
            return;
        }

        alert(`Thank you for your message, ${name}! At this time the contact form is under construction. To reach Reed please reachout via LinkedIn. Apologies for the inconvenience.`)

        setName('')
        setEmail('')
        setMessage('')
        setErrorMessage('')
    }

    //alert('Thank you for visiting the Contact page. We apologize but this page is currently under construction. If you would like to contact Reed please reachout via LinkedIn. Apologies for the inconvenience.')

    return (
        <div className="mainContainer">
            <div className="profileDesc">
                <h1 className="aboutMeTitle">Contact Me</h1>
                <p>Want to work together? Curious about one of my projects or background? Want to talk Dungeons and Dragons or Star Wars?</p>
                <p>Fill out the form below and I will get back to you as soon as I can!</p>
            </div>
            <form className="formContainer">
                <input 
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder="Name"
                    onMouseLeave={handleMissingCells}
                />
                {nameMissingError && (
                    <div>
                        <p className="errorMsg">{nameMissingError}</p>
                    </div>
                )}
                <input 
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder="Email"
                    onMouseLeave={handleMissingCells}
                />
                {emailMissingError && (
                    <div>
                        <p className="errorMsg">{emailMissingError}</p>
                    </div>
                )}
                <textarea 
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    placeholder="What would you like to say?"
                    onMouseLeave={handleMissingCells}
                />
                {messageMissingError && (
                    <div>
                        <p className="errorMsg">{messageMissingError}</p>
                    </div>
                )}
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="errorMsg">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}