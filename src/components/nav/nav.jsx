import { NavLink } from "react-router-dom";
import "../../styles/main.scss"

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
export default Nav