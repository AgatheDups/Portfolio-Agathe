/* eslint-disable react/prop-types */
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import "./contact.css"

export default function Contact (){
    return (
        <div>
            <video className="bg-video" autoPlay loop muted src="/public/fond-first-page.mp4" />
            <NavBar/>
            <div className="content" id="content-contact">
                <div className="info-contact col-md-5">
                    <a href="mailto:agathe.dps@hotmail.com">
                        <img className="icon-contact" src=".//public/icon-envelope.png" />
                        agathe.dps@hotmail.com
                    </a>
                    <a href="tel:0674802697">
                        <img className="icon-contact" src=".//public/icon-phone.png" />
                        06 74 80 26 97
                    </a>
                    <a href="https://www.linkedin.com/in/agathe-dupuis-6205572ab/" target="_blank">
                        <img className="icon-contact" src=".//public/icon-linkedin.png" />
                        LinkedIn
                    </a>
                </div>
                <div className="info-contact col-md-5">
                    <form action="" className="contact-item">
                        <input type="text" id="name" name="name" placeholder="Nom" required/>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                        <input type="text" id="subject" name="subject" placeholder="Sujet" required/>
                        <textarea id="message" name="message" placeholder="Message" required/>
                        <button type="submit" className="btn btn-danger">Envoyer</button>
                    </form>
                </div>
            </div>
            <Footer classFooter="classFooter"/>
        </div>
    )
}