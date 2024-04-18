import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios';

import '../styles/ContactUs1.css'
import 'typeface-roboto';

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackToTopButton from "./BackToTopButton"
// import PulseLoader from "react-spinners/PulseLoader";

import emailjs from '@emailjs/browser';

const ContactUs1 = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        let isValid = true;

        if (!name.trim()) {
            setNameError('Name is required');
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            setNameError('Invalid name');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!mobile.trim()) {
            setMobileError('Mobile number is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
            setMobileError('Invalid mobile number');
            isValid = false;
        } else {
            setMobileError('');
        }

        if (!subject.trim()) {
            setSubjectError('Subject is required');
            isValid = false;
        } else {
            setSubjectError('');
        }

        if (!message.trim()) {
            setMessageError('Message is required');
            isValid = false;
        } else {
            setMessageError('');
        }

        if (isValid) {
            emailjs.sendForm('service_ojgdx6y', 'template_1k3p9jf', form.current, 'yuewyOtFbCBFfYPVp')
                .then((result) => {
                    console.log(result.text);
                    alert("message sent successfully");
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    // }, []);

    // const override: CSSProperties = {
    //     display: "block",
    //     margin: "20%",
    //     borderColor: "red",
    // };

    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)

    // }, [])

    return (
        <div className='contact-container'>
            {/* {
                loading ?
                    <PulseLoader
                        color={'black'}
                        loading={loading}
                        cssOverride={override}
                        size={20}

                    />
                    :
                    <> */}
                        <div className="contact-banner">
                            <div className="banner-header">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="banner-path">
                                <h5>Home</h5>
                                <h6>.</h6>
                                <div className='active-path'><h5>Contact Us</h5></div>
                            </div>
                        </div>

                        <div className="contactus-form-wrapper">
                            <div className="contactus-form-container">
                                <div className="contactus-form">
                                    <form ref={form} onSubmit={sendEmail}>
                                    <div className="contact-name">
                                            <input type="text" placeholder='Name' name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                                            { nameError && <p className="error-message">{nameError}</p> }
                                            {/* <input type="text" placeholder='Last Name' /> */}
                                        </div>
                                        <div className="contact-other-details">
                                            <input type="text" placeholder='Email Address' name="user_email" className='mt-5' value={email} onChange={(e) => setEmail(e.target.value)} />
                                            { emailError && <p className="error-message">{emailError}</p> }

                                            <input type="tel" placeholder='Mobile Number' name="mobile_number" className='mt-5' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                            { mobileError && <p className="error-message">{mobileError}</p> }

                                            <input type="text" placeholder='Subject' name="subject" className='mt-5' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                            { subjectError && <p className="error-message">{subjectError}</p> }

                                            <textarea name="message" id="" cols="30" rows="4" placeholder='Message' className='mt-5' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                            { messageError && <p className="error-message">{messageError}</p> }
                                        </div>
                                        <div className="send-btn-container mt-3">
                                            <button className='p-3 submit-btn' type='submit'>SEND NOW</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="contactus-details">
                                    <div className='contactus-details-header'>
                                        <h1 className='mb-3'>Get Instact Query Drop Us A Line</h1>
                                        <p className=''>It is a long establisheds facts that reader will be distracted</p>
                                    </div>
                                    <div className="contactus-info mt-5">
                                        <div className='contactus-info-section mb-5'>
                                            <div className="contactus-info-icon">
                                                <FaPhone className='info-section-icon' />
                                            </div>
                                            <div className="contactus-info-text">
                                                <h5>(202) 696 5469</h5>
                                                <h5>(202) 696 6369</h5>
                                            </div>
                                        </div>

                                        <div className='contactus-info-section mb-5'>
                                            <div className="contactus-info-icon">
                                                <MdEmail className='info-section-icon' />
                                            </div>
                                            <div className="contactus-info-text">
                                                <h5>support@nixvpn.com</h5>
                                            </div>
                                        </div>

                                        <div className='contactus-info-section'>
                                            <div className="contactus-info-icon">
                                                <FaMapMarkerAlt className='info-section-icon' />
                                            </div>
                                            <div className="contactus-info-text">
                                                <h5><span>HAZERCLOUD INFOTECH LLP </span>
                                                    <div>
                                                        No. 4/461, 2nd Floor, Suite No.747,
                                                        Valamkottil Towers, Judgemukku,
                                                        Kakkanad, Kochi - 682021
                                                    </div>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.098902052212!2d75.35678160962578!3d12.036711788150063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43fff00000007%3A0x174ab27511a58e7c!2sWEAMSE%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1691387634482!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title='map'
                            ></iframe>
                        </div>

                        
                    {/* </>
            } */}
            <BackToTopButton />
        </div>
    )
}

export default ContactUs1
