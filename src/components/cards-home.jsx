import { NavLink } from "react-router-dom"
import DatasCards from "../datas/appartements.json"
import "../styles/cards-home.scss"

function CardsHome() {
    return(
        <div className="div-cards">
            {DatasCards.map((datas) => (
                <NavLink to={`/datas/${datas.id}`} key={datas.id}>
                    <figure>
                        <img src={datas.cover} className="img-cards" alt={datas.title}></img>
                        <figcaption className="title-cards">{datas.title}</figcaption> 
                    </figure>
                </NavLink>
            ))}
        </div>
    )
}

export default CardsHome