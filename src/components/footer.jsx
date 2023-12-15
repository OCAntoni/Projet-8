import Image from "../assets/logo_footer.png"
import "../styles/footer.scss"

function Footer() {
    return (
        <div className="footer">
            <img src={Image} alt="logo kasa noir et blanc"></img>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer