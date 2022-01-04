import React, { useState } from 'react';

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSubmit = (event : any) => {
        event.preventDefault();
        alert("Your message has been sent.")
    }

    return (
        <div  className="container">
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label htmlFor="firstName" id="nameLabel">First Name</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    
                    <label htmlFor="lastName">Last name</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea 
                placeholder="Start typing..." 
                className="message" 
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                >

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}

export default Contact;