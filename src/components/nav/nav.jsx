import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </nav>
    )
}
export default Nav