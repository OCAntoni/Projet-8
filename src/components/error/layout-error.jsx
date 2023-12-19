import { NavLink } from "react-router-dom"
import "../../styles/main.scss"

function Layout() {
    return (
        <div className="layout">
            <p className="code-error">404</p>
            <p className="message-error">Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="redirection">Retourner sur la page d'acceuil</NavLink>
        </div>
    )
}

export default Layout