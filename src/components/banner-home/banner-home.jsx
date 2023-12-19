import Img from "../../assets/home.png"
import "../../styles/main.scss"

function BannerHome() {
    return(
        <div className="div-img">
            <img src={Img} className="image" alt="Paysage de bord de mer avec texte inscrit, chez vous partout et ailleurs"></img>
            <h1 className="title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default BannerHome