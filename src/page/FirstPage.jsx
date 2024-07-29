/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import "./firstpage.css"
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import Background from '../component/Background';

export default function FirstPage() {
    const titreRef = useRef(null);
    const ligneRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const TL = gsap.timeline();

        TL.to(titreRef.current, { autoAlpha: 1, y: 0, delay: 0.4 })
          .to(ligneRef.current, { height: 200, delay: 0.3 })
          .to(subtitleRef.current, { autoAlpha: 1, y: 0 }, "-=0.2")
          .to(btnRef.current, { autoAlpha: 1, y: 0 }, "-=0.2")
    }, []);

    return (
        <header>
            <h1 ref={titreRef} className="text-first-page">Agathe Dupuis</h1>
            <div className="ligne" ref={ligneRef}></div>
            <p ref={subtitleRef} className="text-first-page">Bienvenu sur mon CV</p>
            <Background/>
            <button onClick={()=> goToHome()} className="btn-firstPage btn btn-danger" ref={btnRef}><a>Voir plus</a></button>
        </header>
    );


    function goToHome(){
        navigate("/acceuil");
    }
}
