import { NavLink } from "react-router-dom";
import "../../styles/main.scss"

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/" 
                className={({ isActive, isNotActive }) =>
                    isNotActive ? "link-not-active" : isActive ? "link-active" : ""
            }>Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
export default Nav