/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import "./contact.css"
import emailjs from '@emailjs/browser';

export default function Contact (){
    const form = useRef();
    const [mailSent, setMailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if(mailSent){
            return
        }
        emailjs
        .sendForm('service_6yjr2vm', 'template_io72mpb', form.current, {
          publicKey: 'ZlnVL4Dadk8igzUm9',
        })
        .then(
          () => {
            setMailSent(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div>
            <video className="bg-video" autoPlay loop muted src="/assets/fond-first-page.mp4" />
            <NavBar/>
            <div className="content" id="content-contact">
                <div className="info-contact col-md-5">
                    <a href="mailto:agathe.dupuis.pro@gmail.com">
                        <img className="icon-contact" src="/assets/icon-envelope.png" />
                        agathe.dupuis.pro@gmail.com
                    </a>
                    <a href="tel:0674802697">
                        <img className="icon-contact" src="/assets/icon-phone.png" />
                        06 74 80 26 97
                    </a>
                    <a href="https://www.linkedin.com/in/agathe-dupuis-6205572ab/" target="_blank">
                        <img className="icon-contact" src="/assets/icon-linkedin.png" />
                        LinkedIn
                    </a>
                </div>
                <div className="info-contact col-md-5">
                    <form ref={form} className="contact-item" onSubmit={sendEmail}>
                        <input type="text" id="name" name="from_name" placeholder="Nom" required/>
                        <input type="email" id="email" name="from_mail" placeholder="Email" required/>
                        <input type="text" id="subject" name="subject" placeholder="Sujet" required/>
                        <textarea id="message" name="message" placeholder="Message" required/>
                        <button type="submit" className={`btn ${mailSent ? "btn-success" : "btn-danger"}`}>{mailSent ? "Merci !" : "Envoyer"}</button>
                    </form>
                </div>
            </div>
            <Footer classFooter="classFooter"/>
        </div>
    )
}