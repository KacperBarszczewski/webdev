import React, { useState,useEffect } from "react";
import './Contact.scss';
import ErrorIcon from "../../assets/images/icon-error.svg";

const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [count, setCount] = useState(35000);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError(true);
        } else {
            setError(false);
            alert("sended")
        }
    };

    useEffect(() => {
        const duration = 20000; 
        const startTime = Date.now();
        
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            
            if (elapsed >= duration) {
                setCount(0);
                clearInterval(interval);
            } else {
                const remaining = 35000 - (elapsed / duration) * 35000;
                setCount(Math.floor(remaining));
            }
        }, 50); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <section className='contact' id="contact">
            <div className='contact__contener'>
                <p>{count.toLocaleString()}+ ALREADY JOINED</p>
                <h2>Stay up-to-date with what we're doing</h2>

                <form className="newsletter" onSubmit={handleSubmit} noValidate>
                    <div className={`newsletter__input-wrapper ${error ? "newsletter__input-wrapper--error" : ""}`}>
                        <div className="newsletter__error-icon-wrapper">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError(false);
                                }}
                                className={`newsletter__input  ${error ? "newsletter__input--error" : ""}`}
                                aria-invalid={error}
                            />
                            {error && (
                                <img src={ErrorIcon} alt="!" className="newsletter__error-icon" />
                            )}
                        </div>

                        {error && (
                            <div className="newsletter__error-msg">
                                Whoops, make sure it's an email
                            </div>
                        )}
                    </div>
                    <button type="submit" className="newsletter__button">
                        Contact Us
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;