import Nav from "../nav/nav.jsx"
import Logo from '../../assets/logo_header.png'
import "../../styles/main.scss"

function Header () {
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo kasa" />
            <Nav />
        </div>
    )
}

export default Header