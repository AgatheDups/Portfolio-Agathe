/* eslint-disable react/prop-types */
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import ProjetCard from "../component/ProjetCard";
import "./portfolio.css"

export default function Portfolio (){
    return (
        <div>
            <video className="bg-video" autoPlay loop muted src="/public/fond-first-page.mp4" />
            <NavBar/>
            <div id="content-projets">
                <ProjetCard 
                    titleCard={"Site d'information, d'échanges et d'adoption de Ragdoll"}
                    srcImgCardProjet={"../public/logo-fluffyragdoll.jpg"}
                    altImgCardProjet={"Logo du site FluffyRagdoll"}
                    srcImgCards={["../public/logo-html.png","../public/logo-css.png","../public/logo-js.png","../public/logo-react.png","../public/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo react","Logo bootstrap"]}
                    features={["Forum","Calculateur d'âge","Connexion et inscription","Espace d'adoption"]}
                    linkBtnGithub={"https://github.com/AgatheDups/FluffyRagdoll-react.git"}
                />
                <ProjetCard 
                    titleCard={"Portfolio et CV animé"}
                    srcImgCardProjet={"../public/projet-cv.png"}
                    altImgCardProjet={"Capture d'écran du fond du CV"}
                    srcImgCards={["../public/logo-html.png","../public/logo-css.png","../public/logo-js.png","../public/logo-react.png","../public/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo react","Logo bootstrap"]}
                    features={["Animations","Page de contact"]}
                    linkBtnGithub={"https://github.com/AgatheDups/Portfolio-Agathe.git"}
                />
                <ProjetCard 
                    titleCard={"Simulation de particules"}
                    srcImgCardProjet={"../public/projet-canvas-particule.png"}
                    altImgCardProjet={"Capture d'écran de la simulation"}
                    srcImgCards={["../public/logo-html.png","../public/logo-css.png","../public/logo-js.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript"]}
                    features={["Utilisation de canvas pour les animations"]}
                    linkBtnGithub={"https://github.com/AgatheDups/Canvas-particules.git"}
                />
                <ProjetCard 
                    titleCard={"Site Afpa formation DWWM"}
                    srcImgCardProjet={"../public/logo-afpa.jpg"}
                    altImgCardProjet={"Logo du site FluffyRagdoll"}
                    srcImgCards={["../public/logo-html.png","../public/logo-css.png","../public/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo bootstrap"]}
                    features={["Utilisation de bootstrap","Site responsive"]}
                    linkBtnGithub={"#"}
                     // mettre le lien
                />
                <ProjetCard 
                    titleCard={"Site d'information sur des peintres"}
                    srcImgCardProjet={"../public/logo-atelier-peintre.png"}
                    altImgCardProjet={"Logo du site l'atelier des peintres"}
                    srcImgCards={["../public/logo-html.png","../public/logo-css.png","../public/logo-js.png","../public/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo bootstrap"]}
                    features={["Utilisation de javasript pour les animations","Utilisation de bootstrap","Site responsive"]}
                    linkBtnGithub={"#"}
                    // mettre le lien
                />
            </div>
            <Footer/>
        </div>
    )
}