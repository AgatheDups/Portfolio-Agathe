/* eslint-disable react/prop-types */
import Background from "../component/Background";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import ProjetCard from "../component/ProjetCard";
import "./portfolio.css"

export default function Portfolio (){
    return (
        <div>
            <Background/>
            <NavBar/>
            <div id="content-projets">
                <ProjetCard 
                    titleCard={"Site d'information, d'échanges et d'adoption de Ragdoll"}
                    srcImgCardProjet={"/assets/logo-fluffyragdoll.jpg"}
                    altImgCardProjet={"Logo du site FluffyRagdoll"}
                    srcImgCards={["/assets/logo-html.png","/assets/logo-css.png","/assets/logo-js.png","/assets/logo-react.png","/assets/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo react","Logo bootstrap"]}
                    features={["Forum","Calculateur d'âge","Connexion et inscription","Espace d'adoption"]}
                    linkBtnGithub={"https://github.com/AgatheDups/FluffyRagdoll-react.git"}
                />
                <ProjetCard 
                    titleCard={"Portfolio et CV animé"}
                    srcImgCardProjet={"/assets/projet-cv.png"}
                    altImgCardProjet={"Capture d'écran du fond du CV"}
                    srcImgCards={["/assets/logo-html.png","/assets/logo-css.png","/assets/logo-js.png","/assets/logo-react.png","/assets/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo react","Logo bootstrap"]}
                    features={["Animations","Page de contact"]}
                    linkBtnGithub={"https://github.com/AgatheDups/Portfolio-Agathe.git"}
                />
                <ProjetCard 
                    titleCard={"Simulation de particules"}
                    srcImgCardProjet={"/assets/projet-canvas-particule.png"}
                    altImgCardProjet={"Capture d'écran de la simulation"}
                    srcImgCards={["/assets/logo-html.png","/assets/logo-css.png","/assets/logo-js.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript"]}
                    features={["Utilisation de canvas pour les animations"]}
                    linkBtnGithub={"https://github.com/AgatheDups/Canvas-particules.git"}
                />
                <ProjetCard 
                    titleCard={"Site Afpa formation DWWM"}
                    srcImgCardProjet={"/assets/logo-afpa.jpg"}
                    altImgCardProjet={"Logo du site FluffyRagdoll"}
                    srcImgCards={["/assets/logo-html.png","/assets/logo-css.png","/assets/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo bootstrap"]}
                    features={["Utilisation de bootstrap","Site responsive"]}
                    linkBtnGithub={"https://github.com/AgatheDups/SiteDWWM.git"}
                />
                <ProjetCard 
                    titleCard={"Site d'information sur des peintres"}
                    srcImgCardProjet={"/assets/logo-atelier-peintre.png"}
                    altImgCardProjet={"Logo du site l'atelier des peintres"}
                    srcImgCards={["/assets/logo-html.png","/assets/logo-css.png","/assets/logo-js.png","/assets/logo-bootstrap.png"]}
                    altImgCards={["Logo html","Logo css","Logo javascript","Logo bootstrap"]}
                    features={["Utilisation de javasript pour les animations","Utilisation de bootstrap","Site responsive"]}
                    linkBtnGithub={"https://github.com/AgatheDups/Atelier-Les-Artistes-Boostrap.git"}
                />
            </div>
            <Footer/>
        </div>
    )
}