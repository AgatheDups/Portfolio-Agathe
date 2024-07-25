/* eslint-disable react/prop-types */
import "./projetcard.css"

export default function ProjetCard({ titleCard, srcImgCardProjet, altImgCardProjet, srcImgCards, altImgCards, features, linkBtnGithub }) {
    return (
        <div className="card col-md-3 m-2 text-center">
            <div className="card-body">
                <h5 className="card-title">{titleCard}</h5>
                <img className="img-card rounded" src={srcImgCardProjet} alt={altImgCardProjet} />
                <div>
                    {srcImgCards.map((srcImg, i) => <img className="logo-skills-card" key={i} src={srcImg} alt={altImgCards[i]} />)}
                    
                    <h5>Fonctionnalités</h5>
                    <div className="project-features">
                        {features.map((feature,i) => <p key={i}>{feature}</p>)}
                        
                    </div>
                </div>
                <a href={linkBtnGithub} target="_blank" className="btn btn-danger btn-github">
                    Voir plus
                    <img className="logo-btn-card" src="../public/logo-btn-github.png" />
                </a>
            </div>
        </div>
    )
}