/* eslint-disable react/prop-types */
import "./navbar.css"
import { NavLink } from "react-router-dom";

export default function NavBar (){
    return (
        <div className="listNavLink">
          <NavLink id="navLink-home" className="NavLink" to="/acceuil">Accueil</NavLink>
          <NavLink id="navLink-portfolio" className="NavLink" to="/portfolio">Portfolio</NavLink>
          <NavLink id="navLink-contact" className="NavLink" to="/contact">Contact</NavLink>
        </div>
    )
}