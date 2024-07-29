/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import "./firstpage.css"
import gsap from 'gsap';

export default function FirstPage() {
    const titreRef = useRef(null);
    const ligneRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);

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
            <video className='firstpage-video' autoPlay loop muted src="/assets/fond-first-page.mp4" />
            <button className="btn-firstPage btn btn-danger" ref={btnRef}><a href="/acceuil">Voir plus</a></button>
        </header>
    );
}
