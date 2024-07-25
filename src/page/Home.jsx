/* eslint-disable react/prop-types */
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import "./home.css"


export default function Home(){
    return (
        <div>
            <video className="bg-video" autoPlay loop muted src="/public/fond-first-page.mp4" />
            <NavBar/>
            <div className="content">
                <h2>Développeuse Web et Web Mobile</h2>
                <section id="profile">
                    <h3>Profil</h3>
                    <p>{"Actuellement en formation à l'AFPA pour devenir développeuse WEB, je suis passionnée par la création de sites internet et d'applications web. Je suis motivée et rigoureuse, je suis à la recherche d'une opportunité pour mettre en pratique mes compétences et contribuer à des projets innovants."}</p>
                </section>
                <section id="skills">
                    <h3>Compétences Techniques</h3>
                    <div className="skills-subclass">
                        <h5>Langages de programation</h5>
                        <img className="logo-skills" src="../public/logo-html.png" alt="Logo html" />
                        <img className="logo-skills" src="../public/logo-css.png" alt="Logo css" />
                        <img className="logo-skills" src="../public/logo-js.png" alt="Logo javascript" />
                        <img className="logo-skills" src="../public/logo-python.png" alt="Logo python" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Frameworks & Bibliothèques</h5>
                        <img className="logo-skills" src="../public/logo-react.png" alt="Logo react" />
                        <img className="logo-skills" src="../public/logo-vue.png" alt="Logo vue" />
                        <img className="logo-skills" src="../public/logo-greensock.png" alt="Logo greensock" />
                        <img className="logo-skills" src="../public/logo-bootstrap.png" alt="Logo bootstrap" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Technologies back-end</h5>
                        <img className="logo-skills" src="../public/logo-php.png" alt="Logo php" />
                        <img className="logo-skills" src="../public/logo-node.png" alt="Logo node" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Outils de versioning</h5>
                        <img className="logo-skills" src="../public/logo-git.png" alt="Logo git" />
                        <img className="logo-skills" src="../public/logo-github.png" alt="Logo github" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Éditeurs de code</h5>
                        <img className="logo-skills" src="../public/logo-vsc.png" alt="Logo visual studio code" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Design et Prototypage</h5>
                        <img className="logo-skills" src="../public/logo-figma.png" alt="Logo figma" />
                    </div>
                    <div className="skills-subclass">
                        <h5>Méthodologies</h5>
                        <img className="logo-skills" src="../public/logo-agile.png" alt="Logo agile" />
                        <img className="logo-skills" src="../public/logo-scrum.png" alt="Logo scrum" />
                    </div>
                </section>
                <div id="education">
                    <h3>Formation</h3>
                    <div className="timeline">
                        <div className="timeline-item left">
                            <div className="content-timeline left">
                                <p className="date">2024 - Présent</p>
                                <h4>Formation en développement Web et Web Mobile</h4>
                                <p>AFPA</p>
                                <ul>
                                    <li>{"Développement d'applications web complexes"}</li>
                                    <li>Développement front-end avec React</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="content-timeline right">
                                <p className="date">2023</p>
                                <h4>Formations en ligne en développement web</h4>
                                <p>OpenClassroom et Udemy</p>
                                <ul>
                                    <li>Aquisition des bases de HTML, CSS, JavaScript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item left">
                            <div className="content-timeline left">
                                <p className="date">2019 - 2022</p>
                                <h4>Diplôme de Pédicure-podologue</h4>
                                <p>IFPP, Lille</p>
                                <ul>
                                    <li>Communication</li>
                                    <li>Analyse</li>
                                    <li>Patience</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="content-timeline right">
                                <p className="date">2016 - 2017</p>
                                <h4>Diplôme du Baccalauréat Série S SVT</h4>
                                <p>Lycée Marie Curie, Nogent-sur-oise</p>
                                <ul>
                                    <li>{"Travail d'équipe"}</li>
                                    <li>Persévérance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}