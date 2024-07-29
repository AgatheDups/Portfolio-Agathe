/* eslint-disable react/prop-types */
import "./navbar.css"
import { NavLink } from "react-router-dom";

export default function NavBar (){
    return (
        <div className="listNavLink">
          <NavLink className="NavLink" to="/acceuil">Accueil</NavLink>
          <NavLink className="NavLink" to="/portfolio">Portfolio</NavLink>
          <NavLink className="NavLink" to="/contact">Contact</NavLink>
        </div>
    )
}