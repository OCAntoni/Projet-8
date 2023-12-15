import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/logements">A propos</NavLink>
        </nav>
    )
}
export default Nav