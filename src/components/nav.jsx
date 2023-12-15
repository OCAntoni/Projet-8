import { NavLink } from "react-router-dom";
import '../styles/header.scss'

function Nav() {
    return (
        <nav className="barre-nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/logements">A propos</NavLink>
        </nav>
    )
}
export default Nav