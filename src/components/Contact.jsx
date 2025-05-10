import React from 'react';
import '../styling/Contact.css';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import twitchIcon from '../assets/twitch.png';

function Contact() {
    return (
        <div className='contact'>
            Contact Information & Links
            <br/>
            <br/>
            <div className='contact-links'>
                <a href="mailto:nguyenjanh01@gmail.com">
                    <img
                        className="contact-icons"
                        src={emailIcon}
                        alt={'Email'}
                    /></a>
                <a href="https://github.com/janhnguyen">
                    <img
                        className="contact-icons"
                        src={githubIcon}
                        alt={'GitHub'}
                    /></a>
                <a href="https://www.linkedin.com/in/jason-nguyen-360b7b275/">
                    <img
                        className="contact-icons"
                        src={linkedinIcon}
                        alt={'LinkedIn'}
                    /></a>
                <a href="https://www.twitch.tv/doranis_">
                    <img
                        className="contact-icons"
                        src={twitchIcon}
                        alt={'Twitch'}
                    /></a>
            </div>
        </div>
    );
}

export default Contact;
