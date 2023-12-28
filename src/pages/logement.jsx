import { useParams } from 'react-router-dom'
import Data from "../datas/appartements.json"
import Header from "../components/header/header"
import Carousel from "../components/carousel/carousel"
import Rating from '../components/rating-logements/rating.jsx'
import Accordion from '../components/accordion-apropos/accordion-apropos'
import Footer from "../components/footer/footer"
import Error from './error.jsx'
import "../styles/main.scss"

function Logement() {
    let {id} = useParams()
    let logements = Data
    let logement = logements.find((item) => {
        if (item.id === id) {  
        return true;
        }
        return false;
    })

    function ListesEquipements () {
        let content = ""
        logement.equipments.forEach((equipment) => {
            content += `<p>${equipment}</p>`
        })
        return content
    }

    console.log(logement)
    return logement ? (
        <div>
        <div className='lodge-body'>
            <Header />
            <div className='galery'>
                <Carousel images={logement.pictures} alt={logement.title} />
            </div>
            <div className="container">
                <div className='infos-tags'>
                    <div className='infos'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <div className='tags'>
                        {logement.tags.map((tag) =>(
                            <ul key={tag}>
                                <li>{tag}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="host-rating">
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={`Image représentant ${logement.host.name}`} />
                    </div>
                    <Rating notation={logement.rating} />
                </div>
            </div>
            <div className='descriptif'>
                <Accordion title="Description" text={logement.description} />
                <Accordion title="Equipements" text={ListesEquipements ()} /> 
            </div>
        </div>
        <Footer />
    </div>
    ) : <Error />
}

export default Logement