import Img from "../assets/apropos.png"
import "../styles/banner-apropos.scss"

function BannerApropos() {
    return (
        <div className="div-img">
            <img className="image" src={Img} alt="Paysage de montagne et de foret"></img>
        </div>
    )
}

export default BannerApropos